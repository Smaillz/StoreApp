import {NgModule} from "@angular/core";
import {routing} from "./main-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppMaterialModule} from "../app-material.module";
import {CommonModule} from "@angular/common";

import {ActionOverDialogSection} from "./dialog/actionOverSection/actionOverSectionDialog.component";
import {SectionNavigationComponent} from "./middle-content/category-navigation/section-navigation.component";
import {SpinnerComponent} from "./spinner/spinner.component";
import {NotFoundCategoryComponent} from "./middle-content/not-found-category/not-found-category.component";
import {CategoryProductsComponent} from "./middle-content/category-products/category-products.component";
import {ActionOverDialogCategoryGroup} from "app/main-container/dialog/actionOverCategoryGroup/actionOverCategoryGroupDialog.component";
import {ActionOverCategoryDialog} from "./dialog/actionOverCategory/actionOverCategoryDialog.component";
import {CategoryGroupListComponent} from "./middle-content/category-navigation/category-group-list/category-group-list.component";
import {CategoryComponent} from "./middle-content/category-navigation/category-group-list/category/category.component";
import {BannerComponent} from "./middle-content/category-navigation/welcome-banner/banner.component";
import {PropertiesListComponent} from "./middle-content/product-properties/properties-list.component";
import {
  ControlPropertyComponent,
} from "./middle-content/product-properties/control-property/control-property.component";

@NgModule({
  declarations: [
    SectionNavigationComponent,
    ActionOverDialogSection,
    SpinnerComponent,
    CategoryGroupListComponent,
    ActionOverDialogCategoryGroup,
    CategoryComponent,
    ActionOverCategoryDialog,
    NotFoundCategoryComponent,
    //product components
    CategoryProductsComponent,
    //banner components
    BannerComponent,
    //properties pomponents
    PropertiesListComponent,
    ControlPropertyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    routing,
  ],
  entryComponents: [
    ActionOverDialogSection,
    ActionOverDialogCategoryGroup,
    ActionOverCategoryDialog
  ],
  exports: [
    SpinnerComponent
  ]
})
export class MainContainerModuleModule {
}
