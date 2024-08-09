import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {

  orderFilter=[
    {value:"on_the_way",label: "En route"},
    {value:"delivered",label: "Livré"},
    {value:"cancelled",label: "Annulé"},
    {value:"returned",label: "Retourné"},

  ]

  orders = [[1,1],[1,1,1]]

  constructor(private router : Router){}

  navigateToOrderDetails = (id:Number) => {
    this.router.navigate([`/order/${id}`])
  }

}
