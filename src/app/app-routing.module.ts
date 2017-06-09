import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {NotFoundCategoryComponent} from "./main-container/middle-content/not-found-category/not-found-category.component";
import {CategoryProductsComponent} from "./main-container/middle-content/category-products/category-products.component";
import {PropertiesListComponent} from "./main-container/middle-content/product-properties/properties-list.component";

export const appRoute: Routes = [
  {
    path: "",
    redirectTo: "main",
    pathMatch: "full"
  },
  {
    path: "main",
    loadChildren: "app/main-container/main-container.module#MainContainerModuleModule"
  },
  {
    path: "prop",
    component: PropertiesListComponent,
    pathMatch: "full"
  },
  {
    path: "404",
    component: NotFoundCategoryComponent,
    pathMatch: "full"
  },
  {
    path: ":name",
    component: CategoryProductsComponent,
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoute);
