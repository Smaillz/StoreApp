import {MainContainerComponent} from "./mainContainer/mainContainer.component";
import {ProductContainerComponent} from "./productContainer/productContainer.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {Routes} from "@angular/router";

export const appMainRoutes: Routes = [
  {
    path: "",
    redirectTo: "main",
    pathMatch: "full"
  },
  {
    path: "main",
    component: MainContainerComponent,
    pathMatch: "full"
  },
  {
    path: "404",
    component: NotFoundComponent,
    pathMatch: "full"
  },
  {
    path: ":name",
    component: ProductContainerComponent,
    pathMatch: "full"
  }
];


