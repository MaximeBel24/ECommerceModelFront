import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {

  orders=[1,1,1]

  steps = [
    {id:0, title:"PLACÉ", isCompleted:false},
    {id:1, title:"CONFIRMÉ", isCompleted:false},
    {id:2, title:"EXPÉDIÉ", isCompleted:false},
    {id:3, title:"LIVRÉ", isCompleted:false},

  ]

}
