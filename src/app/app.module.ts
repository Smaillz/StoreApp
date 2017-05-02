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
import {HeaderContentComponent} from "app/mainContainer/headerContent/headerContent.component";
import {MainContentComponent} from "./mainContainer/mainContent/mainContent.component";
import {ActionOverDialogSection} from "./mainContainer/dialog/actionOverSection/actionOverSectionDialog.component";
import {HttpSectionService} from "./service/http.section.service";
import {HttpCategoryGroupService} from "./service/http.categoryGroup.service";
import {MainContainerComponent} from "./mainContainer/mainContainer.component";
import {CategoryGroupListComponent} from "./mainContainer/mainContent/categoryGroupList/categoryGroupList.component";
import {ActionOverDialogCategoryGroup} from "./mainContainer/dialog/actionOverCategoryGroup/actionOverCategoryGroupDialog.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainContainerComponent,
    HeaderContentComponent,
    MainContentComponent,
    ActionOverDialogSection,
    CategoryGroupListComponent,
    ActionOverDialogCategoryGroup,
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
  entryComponents: [
    ActionOverDialogSection,
    ActionOverDialogCategoryGroup
  ],
  providers: [
    HttpSectionService,
    HttpCategoryGroupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
