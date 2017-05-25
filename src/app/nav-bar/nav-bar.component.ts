import {Component, OnDestroy} from '@angular/core';
import {ISection} from "../model/ISection";
import {MdDialog, MdDialogConfig} from "@angular/material";
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
    create: this.addSection,
  };

  constructor(private httpService: HttpService,
              private exchangeDataService: ExchangeDataService,
              private dialog: MdDialog) {
  }

  search() {
  }

  addSection(newSection: ISection) {
    this.exchangeDataService.spinner = true;
    this.subscription.add(
      this.httpService.createSection(newSection).subscribe(() => {
        this.exchangeDataService.openSnackBar("Section",this.action);
        this.exchangeDataService.setDataSection(newSection);
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
