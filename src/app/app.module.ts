import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {
  MdButtonModule, MdCardModule, MdDialogModule, MdIconModule, MdInputModule, MdListModule, MdMenuModule,
  MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from "./app.component";
import {NavBarComponent} from "app/nav-bar/nav-bar.component";
import {MainContainer} from "./mainConteiner/mainContainer.component";
import {HeaderContent} from "app/mainConteiner/headerContent/headerContent.component";
import {MainContent} from "./mainConteiner/mainContent/mainContent.component";
import {ActionOverDialogSection} from "./mainConteiner/dialog/actionOverSection/actionOverSectionDialog.component";
import {HttpSectionService} from "./service/http.section.service";
import {HttpCategoryGroupService} from "./service/http.categoryGroup.service";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainContainer,
    HeaderContent,
    MainContent,
    ActionOverDialogSection,
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
  ],
  entryComponents: [ActionOverDialogSection],
  providers: [HttpSectionService, HttpCategoryGroupService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
