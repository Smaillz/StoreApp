import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SectionNavigationComponent} from "./middle-content/category-navigation/section-navigation.component";
import {CategoryGroupListComponent} from "./middle-content/category-navigation/category-group-list/category-group-list.component";
import {BannerComponent} from "./middle-content/category-navigation/welcome-banner/banner.component";

export const middleRoutes:Routes = [
  {
    path: "main",
    component: SectionNavigationComponent,
    pathMatch: "prefix",
    children: [
      {
        path: "",
        component: BannerComponent,
        pathMatch: "full"
      },
      {
        path: ":id",
        component: CategoryGroupListComponent,
        pathMatch: "full"
      }
    ]
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(middleRoutes);
