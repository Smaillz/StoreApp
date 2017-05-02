import {Component, OnInit, NgZone, OnDestroy} from "@angular/core";
import {HttpSectionService} from "../../service/http.section.service";
import {MdDialog, MdDialogConfig, MdSnackBar} from "@angular/material";
import {ActionOverDialogSection} from "../dialog/actionOverSection/actionOverSectionDialog.component";
import {ISection} from "../../model/ISection";

@Component({
  selector: 'main-content',
  templateUrl: 'mainContent.component.html',
  styleUrls: ['mainContent.component.less'],
})
export class MainContentComponent implements OnInit, OnDestroy {

  private sections: ISection[];
  private action: string;

  constructor(private dialog: MdDialog,
              private httpSectionService: HttpSectionService,
              private snackBar: MdSnackBar,
              private ngZone: NgZone) {
    this.httpSectionService.getData().subscribe(resp => {
      this.getAllSection();
    });
  }

  ngOnInit(): void {
    this.getAllSection();
  }

  getAllSection() {
    this.httpSectionService.findAllSection()
      .subscribe((resp) => {
        this.ngZone.run(() => {
          this.sections = resp.json();
        });
      });
  }

  removeSection(removeSection: ISection) {
    this.httpSectionService.delete(removeSection.id)
      .subscribe(resp => {
        this.openSnackBar(this.action);
        this.getAllSection();
      });
  }

  updateSection(newSection: ISection) {
    this.httpSectionService.update(newSection)
      .subscribe(resp => {
        this.openSnackBar(this.action);
        this.getAllSection();
      });
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
      .subscribe(res => {
        if (res) {
          if (this.action === "Create") {
            //create function
          } else if (this.action === "Update") {
            this.updateSection(res);
          } else {
            this.removeSection(res);
          }
        }
      });
  }

  openSnackBar(action: string) {
    this.snackBar.open("Section has been: ", action, {
      duration: 1000,
    });
  }

  ngOnDestroy(): void {
    //Unsubscribe metod
  }
}
