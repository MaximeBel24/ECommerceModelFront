import { Component, OnInit } from '@angular/core';
import { filters, singleFilter } from './filterdata';
import { mensPantsPage1 } from '../../../../../data/pants/men_page1';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../../state/product/product.service';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../models/appState';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{

  filterData: any
  singleFilterData: any
  menPants: any
  products: any
  levelThree: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService :ProductService,
    private store: Store<AppState>,
    private router: Router
  ){}

  ngOnInit(): void {
    this.filterData = filters
    this.singleFilterData = singleFilter
    this.menPants=mensPantsPage1

    this.activatedRoute.paramMap.subscribe(
      (params)=>{
        this.levelThree = params.get("levelThree")
        var reqData = {
          category: params.get("levelThree"),
          colors:[],
          sizes:[],
          minPrice:0,
          maxPrice:10000,
          minDiscount:0,
          pageNumber:1,
          pageSize:10,
          stock:null
        };
        this.productService.findProductsByCategory(reqData)
      }
    )

    this.activatedRoute.queryParams.subscribe(
      (params)=>{
        const color = params['color']
        const size = params['size']
        const price = params['price']
        const discount = params['discount']
        const stock = params['stock']
        const sort = params['sort']
        const pageNumber = params['paramsNumber']
        const minPrice = price?.split('-')[0]
        const maxPrice = price?.split('-')[1]

        var reqData = {
          category: this.levelThree,
          colors: color? [color].join(","):[],
          sizes: size,
          minPrice:minPrice?minPrice:0,
          maxPrice:maxPrice?maxPrice:1000000,
          minDiscount: discount?discount:0,
          pageNumber: pageNumber?pageNumber:0,
          pageSize:10,
          stock:null
        };

        this.productService.findProductsByCategory(reqData);
      }
    )

    this.store.pipe(select(store=>store.product)).subscribe((product) => {
      this.products = product?.products?.content;
      console.log("store data ", product.products.content);
    })
  }

  handleMultipleSelectFilter(value: string, sectionId:string){
    const queryParams={...this.activatedRoute.snapshot.queryParams}

    console.log('query params', queryParams)

    const filterValues = queryParams[sectionId]
      ? queryParams[sectionId].split(",")
      : [];

    const valueIndex = filterValues.indexOf(value);

    if(valueIndex!=-1){
      filterValues.splice(valueIndex,1);
    } else {
      filterValues.push(value);
    }

    if(filterValues.length>0){
      queryParams[sectionId]=filterValues.join(",")
    } else {
      delete queryParams[sectionId];
    }

    this.router.navigate([],{queryParams})
  }

  handleSingleSelectFilter(value:string, sectionId:string){
    const queryParams = {...this.activatedRoute.snapshot.queryParams};
    queryParams[sectionId]=value;

    this.router.navigate([],{queryParams})
  }


}
