import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuyComponent } from './buy/buy.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { Erc20AddressComponent } from './dashboard/erc20-address/erc20-address.component';
import { ETHRefundAddressComponent } from './dashboard/ethRefund-address/ethRefund-address.component';
import { BTCRefundAddressComponent } from './dashboard/btcRefund-address/btcRefund-address.component';
import { KycComponent } from './dashboard/kyc/kyc.component';
import { InvestmentComponent } from './dashboard/investment/investment.component';
import { ERC20Validator } from './directives/erc20.directive';
import { BTCValidator } from './directives/btc.directive';
import { WalletComponent } from './dashboard/investment/wallet/wallet.component';
import { InvestmentListComponent } from './dashboard/investment/investment-list/investment-list.component';
import { TransactionComponent } from './dashboard/investment/investment-list/transaction/transaction.component';
import { SessionService } from './services/session.service';
import { AccountService } from './services/account.service';
import { InvestmentService } from './services/investment.service';
import { RateService } from './services/rate.service';
import { CountdownComponent } from './dashboard/investment/countdown/countdown.component';
import { ClipboardModule } from 'ngx-clipboard';
import { GeneralInfoService } from './services/generalInfo.service';
import { GeneralInfoComponent } from './dashboard/general-info/general-info.component';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BuyComponent,
    ConfirmComponent,
    Erc20AddressComponent,
    KycComponent,
    InvestmentComponent,
    ERC20Validator,
    BTCValidator,
    WalletComponent,
    InvestmentListComponent,
    TransactionComponent,
    CountdownComponent,
    GeneralInfoComponent,
    ETHRefundAddressComponent,
    BTCRefundAddressComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CustomFormsModule,
    ClipboardModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory ,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    SessionService,
    RateService,
    GeneralInfoService,
    AccountService,
    InvestmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
