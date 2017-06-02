import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SectionNavigationComponent} from "../main-container/middle-content/category-navigation/section-navigation.component";

export const headerRoutes: Routes = [
  {
    path: "main",
    component: SectionNavigationComponent,
    pathMatch: "prefix",
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(headerRoutes);
