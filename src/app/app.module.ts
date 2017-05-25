import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";

import {appMainRoutes} from "./app-routing.module";
import {AppMaterialModule} from "./app-material.module";

import {AppComponent} from "./app.component";
import {NavBarComponent} from "app/nav-bar/nav-bar.component";
import {MainContentComponent} from "./mainContainer/mainContent/mainContent.component";
import {ActionOverDialogSection} from "./mainContainer/dialog/actionOverSection/actionOverSectionDialog.component";
import {MainContainerComponent} from "./mainContainer/mainContainer.component";
import {CategoryGroupListComponent} from "./mainContainer/mainContent/categoryGroupList/categoryGroupList.component";
import {ActionOverDialogCategoryGroup} from "./mainContainer/dialog/actionOverCategoryGroup/actionOverCategoryGroupDialog.component";
import {CategoryComponent} from "./mainContainer/mainContent/categoryGroupList/category/category.component";
import {ActionOverCategoryDialog} from "./mainContainer/dialog/actionOverCategory/actionOverCategoryDialog.component";
import {HttpService} from "./service/http.service";
import {ExchangeDataService} from "./service/exchangeData.service";
import {SpinnerComponent} from "./mainContainer/spinner/spinner.component";
import {ProductContainerComponent} from "./productContainer/productContainer.component";
import {NotFoundComponent} from "./not-found/not-found.component";


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    // main container components
    MainContainerComponent,
    MainContentComponent,
    ActionOverDialogSection,
    CategoryGroupListComponent,
    ActionOverDialogCategoryGroup,
    CategoryComponent,
    ActionOverCategoryDialog,
    SpinnerComponent,
    //product components
    ProductContainerComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppMaterialModule,
    RouterModule.forRoot(appMainRoutes)
  ],
  entryComponents: [
    ActionOverDialogSection,
    ActionOverDialogCategoryGroup,
    ActionOverCategoryDialog
  ],
  providers: [
    HttpService,
    ExchangeDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
