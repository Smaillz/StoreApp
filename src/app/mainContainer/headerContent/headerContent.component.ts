import {Component, OnDestroy} from "@angular/core";
import {HttpSectionService} from "../../service/http.section.service";
import {MdDialog, MdDialogConfig, MdSnackBar} from "@angular/material";
import {ActionOverDialogSection} from "../dialog/actionOverSection/actionOverSectionDialog.component";
import {ISection} from "../../model/ISection";

@Component({
  selector: 'header-content',
  templateUrl: 'headerContent.component.html',
  styleUrls: ['headerContent.component.less'],
})
export class HeaderContentComponent implements OnDestroy{

  private action: string;

  constructor(private dialog: MdDialog,
              private httpSectionService: HttpSectionService,
              private snackBar: MdSnackBar) {
  }

  openDialog(obj: any, currentAction: string) {
    this.action = currentAction;

    const config: MdDialogConfig = {
      data: {
        enty: obj,
        action: this.action
      }
    };
    const dialogRef = this.dialog.open(ActionOverDialogSection, config);

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result != null) {
          this.addSection(result);
        }
      });
  }

  openSnackBar(action: string) {
    this.snackBar.open("Section has been: ", action, {
      duration: 1000,
    });
  }

  addSection(newSection: ISection) {
    this.httpSectionService.create(newSection)
      .subscribe((resp) => {
          this.httpSectionService.setData(newSection);
          this.openSnackBar(this.action);
        }
      );
  }

  ngOnDestroy(): void {
    //Unsubscribe metod
  }
}
