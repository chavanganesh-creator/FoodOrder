import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooditemComponent } from './fooditem/fooditem.component';
import { HotelComponent } from './hotel/hotel.component';
import { OrderComponent } from './order/order.component';
import { UserComponent } from './user/user.component';
/**
 * Router routes for index navigation
 * @author Ganesh Chavan
 * Date 14/11/2021
 */
const routes: Routes = [
  {path:'',redirectTo:'user',pathMatch:'full'},
  {path:'user',component:UserComponent},
  {path:'hotel',component:HotelComponent},
  {path:'order',component:OrderComponent},
  {path:'fooditem',component:FooditemComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
