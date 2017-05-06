import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {
  MdButtonModule, MdCardModule, MdChipsModule, MdDialogModule, MdIconModule, MdInputModule, MdListModule, MdMenuModule,
  MdProgressSpinnerModule,
  MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainContainerComponent,
    MainContentComponent,
    ActionOverDialogSection,
    CategoryGroupListComponent,
    ActionOverDialogCategoryGroup,
    CategoryComponent,
    ActionOverCategoryDialog,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdDialogModule,
    MdSnackBarModule,
    MdTabsModule,
    MdListModule,
    MdChipsModule,
    MdProgressSpinnerModule,
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
