import { createAction, props } from "@ngrx/store";

export interface Order {
    id: string;
    items: OrderItem[];
    totalAmount: number;
}

export interface OrderItem {
    productId: string;
    quantity: number;
    price: number;
}

export interface ErrorResponse {
    message: string;
    statusCode: number;
}

export const createOrderRequest = createAction(
    '[Order] Create Order Request',
    props<{ reqData: Partial<Order> }>()
)
export const createOrderSuccess = createAction(
    '[Order] Create Order Success',
    props<{ order: Order }>()
)
export const createOrderFailure = createAction(
    '[Order] Create Order Failure',
    props<{ error: ErrorResponse }>()
)

export const getOrderByIdRequest = createAction(
    '[Order] Get Order By Id Request',
    props<{ orderId: any }>()
)
export const getOrderByIdSuccess = createAction(
    '[Order] Get Order By Id Success',
    props<{ order: any }>()
)
export const getOrderByIdFailure = createAction(
    '[Order] Get Order By Id Failure',
    props<{ error: any }>()
)

export const getOrderHistoryRequest = createAction(
    '[Order] Get Order History Request'
)
export const getOrderHistorySuccess = createAction(
    '[Order] Get Order History Success',
    props<{ orders: any }>()
)
export const getOrderHistoryFailure = createAction(
    '[Order] Get Order History Failure',
    props<{ error: any }>()
)