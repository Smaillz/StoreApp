import {Component, Input, NgZone, OnChanges, OnDestroy, SimpleChanges} from "@angular/core";
import {MdDialog, MdDialogConfig, MdSnackBar} from "@angular/material";
import {ActionOverDialogCategoryGroup} from "../../dialog/actionOverCategoryGroup/actionOverCategoryGroupDialog.component";
import {ICategoryGroup} from "../../../model/ICategoryGroup";
import {Subscription} from "rxjs/Subscription";
import {HttpService} from "../../../service/http.service";
import {ExchangeDataService} from "../../../service/exchangeData.service";

@Component({
  selector: 'categoryGroup-list',
  templateUrl: 'categoryGroupList.component.html',
  styleUrls: ['categoryGroupList.component.less'],
})
export class CategoryGroupListComponent implements OnChanges, OnDestroy {

  @Input() sectionId: number;
  private action: string;
  private currentCategoryGroupId: number;
  private categoryGroupList: ICategoryGroup[]= [];
  private subscription: Subscription = new Subscription();
  private doAction = {
    delete: this.removeCategoruGroup,
    create: this.addCategoryGroup,
    update: this.updateCategoryGroup
  };

  constructor(private httpService: HttpService,
              private exchangeDataService: ExchangeDataService,
              private dialog: MdDialog,
              private snackBar: MdSnackBar,
              private ngZone: NgZone) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getCategoryGroupBySectionId(this.sectionId);
  }

  getCategoryGroupBySectionId(id: number) {
    this.exchangeDataService.spinner = true;
    this.subscription.add(
      this.httpService.findCategoryGroupBySectionId(id)
        .subscribe(resp => {
          this.ngZone.run(() => {
            this.exchangeDataService.spinner = false;
            this.categoryGroupList = resp.json();
          });
        }));
  }

  addCategoryGroup(newCategoruGroup: ICategoryGroup) {
    this.subscription.add(
      this.httpService.createCategoryGroup(newCategoruGroup)
        .subscribe(resp => {
          this.openSnackBar(this.action);
          this.getCategoryGroupBySectionId(this.sectionId);
        }));
  }

  updateCategoryGroup(changedCategoryGroup: ICategoryGroup) {
    this.subscription.add(
      this.httpService.updateCategoryGroup(changedCategoryGroup)
        .subscribe(resp => {
          this.openSnackBar(this.action);
          this.getCategoryGroupBySectionId(this.sectionId);
        }));
  }

  removeCategoruGroup(removeCategoryGroup: ICategoryGroup) {
    this.subscription.add(
      this.httpService.deleteCategoryGroup(removeCategoryGroup.id)
        .subscribe(resp => {
          this.openSnackBar(this.action);
          this.getCategoryGroupBySectionId(this.sectionId);
        }));
  }

  openDialog(obj: CategoryGroupListComponent, currentAction: string) {
    this.action = currentAction;

    const config: MdDialogConfig = {
      data: {
        enty: obj,
        action: this.action
      }
    };
    const dialogRef = this.dialog.open(ActionOverDialogCategoryGroup, config);

    dialogRef.afterClosed()
      .subscribe(res => {
        if (res) {
          this.doAction[this.action].bind(this)(res);
        }
      });
  }

  openSnackBar(currentAction: string) {
    this.snackBar.open("CategoryGroup has been: ", currentAction, {
      duration: 1000,
    });
  }

  choiceCategoryGroup(categoryGroup: ICategoryGroup) {
    this.currentCategoryGroupId = categoryGroup.id;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
