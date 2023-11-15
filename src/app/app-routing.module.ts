import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { navigation } from 'src/assets/navigation';

const routes: Routes = [
  { path: navigation.orders, loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: navigation.customers, loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  {path: '', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
