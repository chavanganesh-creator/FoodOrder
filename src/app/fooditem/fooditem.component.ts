import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ApiFoodServiceService } from '../api-food-service.service';
/**
 * Food Items for food item
 * @author Ganesh Chavan
 * Date:13/11/2021
 */
@Component({
  selector: 'app-fooditem',
  templateUrl: './fooditem.component.html',
  styleUrls: ['./fooditem.component.css']
})
export class FooditemComponent implements OnInit {
  ngOnInit(): void {
  }
  model: FoodItemModel = {
    fItem_name: '',
    hid:'',
    fItem_discription:'',
    fPrice:'',
  };


  constructor(private httpClient:HttpClient ) { }
//Add Food Items service
  addFoodItem(): void {
    let url="http://localhost:8080/v1/foodList";
    this.httpClient.post(url,this.model).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert("An error has occurred while sending feedback");
      }
    );
    alert('Selected'+this.model.fItem_name)
  }
  
}
//export interface
export interface FoodItemModel {
  fItem_name: string;
  hid:string;
  fPrice: string;
  fItem_discription:String;
}
