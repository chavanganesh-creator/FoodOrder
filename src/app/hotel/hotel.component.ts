import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
/**
 * Hotel Component class 
 * @author Ganesh Chavan
 * Date 12/11/2021
 */
export class hotel{
  hId:any;
  hName:String='';
  hAddress:String='';
}
@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})

export class HotelComponent implements OnInit {
  hotelsBeans:any;

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getHotels();
  }
  //Get all hotels list
  getHotels(){
   return this.httpClient.get<any>('http://localhost:8080/v1/hotels').subscribe(
      (response) => {
        this.hotelsBeans=response.hotelsBeanList;
        console.log(response.hotelsBeanList);
      }
    );
  }
  
}
