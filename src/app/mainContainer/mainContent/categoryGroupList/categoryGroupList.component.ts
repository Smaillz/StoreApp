import {Component, Input, NgZone, OnChanges, OnDestroy, SimpleChanges} from "@angular/core";
import {MdDialog, MdDialogConfig} from "@angular/material";
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
  private componentName = "CategoryGroup";
  private action: string;
  private currentCategoryGroupId: number;
  private categoryGroupList;
  private subscription: Subscription = new Subscription();
  private doAction = {
    delete: this.removeCategoruGroup,
    create: this.addCategoryGroup,
    update: this.updateCategoryGroup
  };

  constructor(private httpService: HttpService,
              private exchangeDataService: ExchangeDataService,
              private dialog: MdDialog,
              private ngZone: NgZone) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getCategoryGroupBySectionId(this.sectionId);
  }

  getCategoryGroupBySectionId(id: number) {
    this.subscription.add(
      this.httpService.findCategoryGroupBySectionId(id)
        .subscribe(resp => {
          this.ngZone.run(() => {
            this.exchangeDataService.spinner = false;
            this.categoryGroupList = <ICategoryGroup>resp.json();
          });
        }));
  }

  addCategoryGroup(newCategoruGroup: ICategoryGroup) {
    this.exchangeDataService.spinner = true;
    this.subscription.add(
      this.httpService.createCategoryGroup(newCategoruGroup)
        .subscribe(() => {
          this.exchangeDataService.openSnackBar(this.componentName, this.action);
          this.getCategoryGroupBySectionId(this.sectionId);
        }));
  }

  updateCategoryGroup(changedCategoryGroup: ICategoryGroup) {
    this.exchangeDataService.spinner = true;
    this.subscription.add(
      this.httpService.updateCategoryGroup(changedCategoryGroup)
        .subscribe(() => {
          this.exchangeDataService.openSnackBar(this.componentName, this.action);
          this.getCategoryGroupBySectionId(this.sectionId);
        }));
  }

  removeCategoruGroup(removeCategoryGroup: ICategoryGroup) {
    this.exchangeDataService.spinner = true;
    this.subscription.add(
      this.httpService.deleteCategoryGroup(removeCategoryGroup.id)
        .subscribe(() => {
          this.exchangeDataService.openSnackBar(this.componentName, this.action);
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

  choiceCategoryGroup(categoryGroup: ICategoryGroup) {
    this.currentCategoryGroupId = categoryGroup.id;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
