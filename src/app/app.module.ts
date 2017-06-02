import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import {AppComponent} from "./app.component";
import {HttpService} from "./service/http.service";
import {ExchangeDataService} from "./service/exchangeData.service";
import {routing} from "./app-routing.module";
import {MainContainerModuleModule} from "./main-container/main-container.module";
import {HeaderContainerModule} from "./header-container/header-container.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainContainerModuleModule,
    HeaderContainerModule,
    routing
  ],
  providers: [
    HttpService,
    ExchangeDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
