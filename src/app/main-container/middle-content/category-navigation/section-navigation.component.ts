import {Component, OnInit, NgZone, OnDestroy} from "@angular/core";
import {MdDialog, MdDialogConfig} from "@angular/material";
import {ActionOverDialogSection} from "../../dialog/actionOverSection/actionOverSectionDialog.component";
import {ISection} from "../../../model/ISection";
import {Subscription} from "rxjs/Subscription";
import {HttpService} from "../../../service/http.service";
import {ExchangeDataService} from "../../../service/exchangeData.service";

@Component({
  selector: 'section-navigation',
  templateUrl: 'section-navigation.component.html',
  styleUrls: ['section-navigation.component.less'],
})
export class SectionNavigationComponent implements OnInit, OnDestroy {

  private componentName: string = "Section";
  private sections;
  private action: string;
  private subscription = new Subscription();
  private doAction = {
    delete: this.removeSection,
    update: this.updateSection,
  };

  constructor(private dialog: MdDialog,
              private httpService: HttpService,
              private exchangeDataService: ExchangeDataService,
              private ngZone: NgZone) {
    this.exchangeDataService.getDataSection().subscribe(() => {
      this.getAllSection();
    });
  }

  ngOnInit(): void {
    this.getAllSection();
  }

  getAllSection() {
    this.subscription.add(
      this.httpService.findAllSection()
        .subscribe((resp) => {
          this.ngZone.run(() => {
            this.exchangeDataService.spinner = false;
            this.sections = <ISection[]>resp.json();
          });
        })
    );
  }

  removeSection(removeSection: ISection) {
    this.exchangeDataService.spinner = true;
    this.subscription.add(
      this.httpService.deleteSection(removeSection.id)
        .subscribe(() => {
          this.exchangeDataService.openSnackBar(this.componentName, this.action);
          this.getAllSection();
        })
    );

  }

  updateSection(newSection: ISection) {
    this.exchangeDataService.spinner = true;
    this.subscription.add(
      this.httpService.updateSection(newSection)
        .subscribe(() => {
          this.exchangeDataService.openSnackBar(this.componentName, this.action);
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
