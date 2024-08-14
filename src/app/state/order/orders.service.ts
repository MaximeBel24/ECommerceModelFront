import { Injectable } from "@angular/core";
import { BASE_API_URL } from "../../config/api";
import { Store } from "@ngrx/store";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { catchError, map, of } from "rxjs";
import { createOrderFailure, createOrderSuccess, getOrderByIdFailure, getOrderByIdSuccess, getOrderHistoryFailure, getOrderHistoryRequest, getOrderHistorySuccess } from "./order.action";

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    private API_BASE_URL = BASE_API_URL;
    private headers;

    constructor(
        private store: Store,
        private http: HttpClient,
        private router: Router,
        private route: ActivatedRoute
    ){
        if (typeof window !== 'undefined') {
            this.headers = new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            });
        }
        
    }

    createOrder(reqData: any){
        console.log('create order', reqData);
        const url = `${this.API_BASE_URL}/orders/`;

        return this.http
            .post(url, reqData, { headers: this.headers })
            .pipe(
                map((data: any) => {
                    console.log('created order', data);
                    if(data.id){
                        this.router.navigate([`/checkout/payments/${data.id}`], {
                            queryParams: {step: '3', order_id: data.id},
                        })
                    }
                    console.log('created order -', data);
                    return createOrderSuccess({ order: data})
                }),
                catchError((error: any) => {
                    const errorMessage = error.error?.message || error.message || 'Unknown error';
                    console.log('catch error: ', errorMessage);
                    return of(createOrderFailure(errorMessage));
                })
                
            ).subscribe((action) => this.store.dispatch(action));
    }

    getOrderById(orderId: string){
        const url = `${this.API_BASE_URL}/orders/${orderId}`;

        return this.http
            .get(url, { headers: this.headers })
            .pipe(
                map((data: any) => {
                    console.log('order by id', data);
                    return getOrderByIdSuccess({ order: data })
                }),
                catchError((error: any) => {
                    const errorMessage = error.error?.message || error.message || 'Unknown error';
                    console.log('catch error: ', errorMessage);
                    return of(createOrderFailure(errorMessage));
                })
                
            ).subscribe((action) => this.store.dispatch(action));
    }

    getOrderHistory(orderId: string){
        const url = `${this.API_BASE_URL}/orders/user`;

        return this.http
            .get(url, { headers: this.headers })
            .pipe(
                map((data: any) => {
                    console.log('order history', data);
                    return getOrderHistorySuccess({ orders: data })
                }),
                catchError((error: any) => {
                    console.log('catch error: ', error);
                    return of(
                        getOrderHistoryFailure(
                            error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message
                        )
                    )
                })
            ).subscribe((action) => this.store.dispatch(action));
    }
}