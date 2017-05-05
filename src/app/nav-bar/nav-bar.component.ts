import {Component, OnDestroy} from '@angular/core';
import {ISection} from "../model/ISection";
import {MdDialog, MdDialogConfig, MdSnackBar} from "@angular/material";
import {Subscription} from "rxjs/Subscription";
import {ActionOverDialogSection} from "../mainContainer/dialog/actionOverSection/actionOverSectionDialog.component";
import {HttpService} from "../service/http.service";
import {ExchangeDataService} from "../service/exchangeData.service";

@Component({
  selector: 'nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['nav-bar.component.less'],
})
export class NavBarComponent implements OnDestroy {

  private action: string;
  private subscription: Subscription = new Subscription();
  private doAction = {
    // delete: this.removeSection,
    create: this.addSection,
    // update: this.updateSection
  };

  constructor(private httpService: HttpService,
              private exchangeService: ExchangeDataService,
              private dialog: MdDialog,
              private snackBar: MdSnackBar) {
  }

  search() {
    //do search
  }

  addSection(newSection: ISection) {
    this.subscription.add(
      this.httpService.createSection(newSection).subscribe(res => {
        this.openSnackBar(this.action);
        this.exchangeService.setDataSection(newSection);
      })
    );
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
          this.doAction[this.action].bind(this)(res);
        }
      });
  }

  openSnackBar(action: string) {
    this.snackBar.open("Section has been: ", action, {
      duration: 1000,
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
