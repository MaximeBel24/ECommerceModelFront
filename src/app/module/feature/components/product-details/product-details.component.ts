import { Component, OnInit } from '@angular/core';
import { lehngacholiPage2 } from '../../../../../data/Saree/lenghaCholiPage2';
import { mensPantsPage1 } from '../../../../../data/pants/men_page1';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{

  selectedSize: any;
  reviews=[1,1,1];
  relatedProducts:any;

  constructor(private router: Router) {}

  ngOnInit(){
    this.relatedProducts = mensPantsPage1
  }

  handleAddToCart() {
    this.router.navigate(['cart'])
  }

}
