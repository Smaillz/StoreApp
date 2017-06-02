import {NgModule} from "@angular/core";
import {NavMenuComponent} from "./nav-menu/nav-menu.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AppMaterialModule} from "../app-material.module";
import {routing} from "./header-routing.module";
import {ActionComponent} from "./nav-menu/nav-action/action.component";

@NgModule({
  declarations:[
    NavMenuComponent,
    ActionComponent
  ],
  imports:[
    CommonModule,
    FormsModule,
    AppMaterialModule,
    routing
  ],
  exports:[
    NavMenuComponent
  ]
})
export class HeaderContainerModule{
}
