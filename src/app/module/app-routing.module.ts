import {NgModule} from "@angular/core";
import {MainContainerComponent} from "../mainContainer/mainContainer.component";
import {RouterModule, Routes} from "@angular/router";
import {ProductContainerComponent} from "../productContainer/productContainer.component";
import {NotFoundComponent} from "../not-found/not-found.component";

const appRoutes: Routes = [
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

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
