import {Component} from "@angular/core";
import {HttpSectionService} from "../../service/http.section.service";
import {Section} from "../../model/section";
import {MdDialog, MdDialogConfig, MdSnackBar} from "@angular/material";
import {ActionOverDialogSection} from "../dialog/actionOverSection/actionOverSectionDialog.component";

@Component({
  selector: 'header-content',
  templateUrl: 'headerContent.component.html',
  styleUrls: ['headerContent.component.less'],
})
export class HeaderContent {

  constructor(private dialog: MdDialog,
              private httpSectionService : HttpSectionService,
              public snackBar: MdSnackBar) {}

  openDialog() {
    let config : MdDialogConfig = {
      data: {
        enty: null,
        action: "Create"
      }
    };
    let dialogRef = this.dialog.open(ActionOverDialogSection,config);

    dialogRef.afterClosed().subscribe(result => {
      if(result != null){
        this.openSnackBar();
        this.addSection(result);
      }
    });
  }

  openSnackBar() {
    this.snackBar.open("Section has been: ", "created", {
      duration: 1000,
    });
  }

  addSection(newSection: Section){
    this.httpSectionService.create(newSection).subscribe((resp:any)=> {
        console.log(resp.json());
      }
    );
  }
}
