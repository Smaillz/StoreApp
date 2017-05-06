import {Component, OnInit, NgZone, OnDestroy, EventEmitter, Output} from "@angular/core";
import {MdDialog, MdDialogConfig, MdSnackBar} from "@angular/material";
import {ActionOverDialogSection} from "../dialog/actionOverSection/actionOverSectionDialog.component";
import {ISection} from "../../model/ISection";
import {Subscription} from "rxjs/Subscription";
import {HttpService} from "../../service/http.service";
import {ExchangeDataService} from "../../service/exchangeData.service";

@Component({
  selector: 'main-content',
  templateUrl: 'mainContent.component.html',
  styleUrls: ['mainContent.component.less'],
})
export class MainContentComponent implements OnInit, OnDestroy {

  private sections: ISection[];
  private action: string;
  private spinner: boolean = true;
  private subscription: Subscription = new Subscription();
  private doAction = {
    delete: this.removeSection,
    // create: this.addSection,
    update: this.updateSection,
  };

  constructor(private dialog: MdDialog,
              private httpService: HttpService,
              private exchangeService: ExchangeDataService,
              private snackBar: MdSnackBar,
              private ngZone: NgZone) {
    this.exchangeService.getDataSection().subscribe(resp => {
      this.getAllSection();
    });
  }

  ngOnInit(): void {
    this.getAllSection();
  }

  getAllSection() {
    this.spinner = true;
    this.subscription.add(
      this.httpService.findAllSection()
        .subscribe((resp) => {
          this.ngZone.run(() => {
            this.spinner = false;
            this.sections = resp.json();
          });
        })
    );
  }

  removeSection(removeSection: ISection) {
    this.subscription.add(
      this.httpService.deleteSection(removeSection.id)
        .subscribe(resp => {
          this.openSnackBar(this.action);
          this.getAllSection();
        })
    );

  }

  updateSection(newSection: ISection) {
    this.subscription.add(
      this.httpService.updateSection(newSection)
        .subscribe(resp => {
          this.openSnackBar(this.action);
          this.getAllSection();
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
