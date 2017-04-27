import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {
  MdButtonModule, MdCardModule, MdDialogModule, MdIconModule, MdInputModule, MdMenuModule, MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {AppComponent} from './app.component';
import {MainComponent} from "./main/main.component";
import {ActionOverDialogSection} from "./main/dialog/actionOverSection/actionOverSectionDialog.component";
import {HeaderComponent} from "./main/header/header.component";
import {ContentComponent} from "./main/content/content.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent,
    HeaderComponent,
    ActionOverDialogSection,
    ContentComponent,
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

  ],
  entryComponents: [ActionOverDialogSection],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
