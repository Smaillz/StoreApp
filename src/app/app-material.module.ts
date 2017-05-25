import {NgModule} from "@angular/core";
import {
  MdButtonModule, MdCardModule, MdChipsModule, MdDialogModule, MdIconModule, MdInputModule, MdListModule, MdMenuModule,
  MdProgressSpinnerModule,
  MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  exports: [
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
    MdChipsModule,
    MdProgressSpinnerModule,]
})
export class AppMaterialModule {
}
