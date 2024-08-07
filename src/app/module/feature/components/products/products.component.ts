import { Component, OnInit } from '@angular/core';
import { filters, singleFilter } from './filterdata';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{

  filterData: any
  singleFilterData: any

  ngOnInit(): void {
    this.filterData = filters
    this.singleFilterData = singleFilter
  }
}
