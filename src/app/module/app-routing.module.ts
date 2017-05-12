import {NgModule} from "@angular/core";
import {MainContainerComponent} from "../mainContainer/mainContainer.component";
import {RouterModule, Routes} from "@angular/router";
import {ProductContainerComponent} from "../productContainer/productContainer.component";

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "main",
    pathMatch: "full"
  },
  {
    path:"main",
    component: MainContainerComponent
  },
  {
    path: ":name",
    component: ProductContainerComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule{
}
