import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
/**
 * Component for placing order
 * @author Ganesh Chavan
 * Date 15/11/2021
 */

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  model: OrderModelObject = {
  fId:'',
  hId:'',
  uId:'',
  oQuantity:'',
  oNet_price:'',
  oStatus:''
  };

  foodListBean:any;
  userSession:any;
  
  constructor(private httpClient:HttpClient) { 

  }
  
  ngOnInit(): void {
    this.getFoodList();
    
  }
  //Get All Food List
  getFoodList(){
    return this.httpClient.get<any>('http://localhost:8080/v1/foodList').subscribe(
       (response) => {
         this.foodListBean=response;
         console.log(this.foodListBean);
       }
     );
   }
   
   //Method get user session 
getSession(){ return sessionStorage.getItem('sessionUid');}

 //User can place Order 
  putData(i:any,foodItem:any):void{
    console.log(foodItem);
    console.log(this.model);
    this.userSession=this.getSession;
    this.model.fId=foodItem.fId;
    this.model.hId=foodItem.hid;
    this.model.oNet_price=foodItem.fPrice;
    this.model.oQuantity='1';
    this.model.oStatus='pending';
    this.model.uId='123';
    let url="http://localhost:8080/v1/order";
    this.httpClient.post(url,this.model).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert("An error has occurred while sending feedback");
      }
    );
    console.log(this.model);

    alert('Order is Placed')
  }
}
//interface order placing order
export interface OrderModelObject{
  fId:string;
  hId:string;
  uId:string;
  oQuantity:string;
  oNet_price:string;
  oStatus:string;
}


