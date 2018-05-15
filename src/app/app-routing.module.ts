import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuyComponent } from './buy/buy.component';
import { ConfirmComponent } from './confirm/confirm.component';

const routes: Routes = [
  {
      path: '',
      component: DashboardComponent,
  },
  {
    path: 'buy',
    component: BuyComponent,
  },
  {
    path: 'confirm',
    component: ConfirmComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
