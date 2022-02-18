import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
/**
 * Component user datail
 * @author Ganesh Chavan
 * Date 15/11/2021
 */
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  search : String ="";
  uId:String='';
  userBeans:any;
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    
    this.getUser();
  }
  
  getUser(){
    return this.httpClient.get<any>('http://localhost:8080/v1/user/123').subscribe(
       (response) => {
         this.userBeans=response;

         console.log(response);
       }
     );
   }

   startSession(){
     sessionStorage.setItem("sessionUid",this.userBeans.uId);
   }
}


