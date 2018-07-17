import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuyComponent } from './buy/buy.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { WhitelistpageComponent } from './whitelistpage/whitelistpage.component';
import { LoginForkComponent } from './user/loginfork/loginfork.component';
import { ChangePwComponent } from './user/changePw/changepw.component';
import { ResetPwComponent } from './user/resetPw/resetpw.component';

const routes: Routes = [
  // {
  //     path: '',
  //     component: DashboardComponent,
  //     canActivate: [AuthGuard]
  // },
  {
    path: '',
    component: WhitelistpageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'changepassword',
    component: ChangePwComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'welcome',
    component: LoginForkComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'resetpassword',
    component: ResetPwComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
