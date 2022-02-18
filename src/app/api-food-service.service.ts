import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodItemModel } from './fooditem/fooditem.component';
/**
 * Service class for Food servoce
 * @author Ganesh Chavan
 * Date 14/11/2021
 */
@Injectable({
  providedIn: 'root'
})
export class ApiFoodServiceService {
  
  postFeedback(url: string,modelFoodItem: FoodItemModel): Observable<any> {
    return this.httpClient.post(url, modelFoodItem);
  }

  constructor(private httpClient:HttpClient) { }
}
