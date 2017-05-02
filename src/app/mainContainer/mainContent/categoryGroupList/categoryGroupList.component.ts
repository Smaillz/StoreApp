import {Component, Input, NgZone, OnChanges, OnDestroy, SimpleChanges} from "@angular/core";
import {HttpCategoryGroupService} from "../../../service/http.categoryGroup.service";
import {MdDialog, MdDialogConfig, MdSnackBar} from "@angular/material";
import {ActionOverDialogCategoryGroup} from "../../dialog/actionOverCategoryGroup/actionOverCategoryGroupDialog.component";
import {ICategoryGroup} from "../../../model/ICategoryGroup";

@Component({
  selector: 'categoryGroup-list',
  templateUrl: 'categoryGroupList.component.html',
  styleUrls: ['categoryGroupList.component.less'],
})
export class CategoryGroupListComponent implements OnChanges, OnDestroy {

  @Input() sectionId: number;
  private action: string;
  private categoryGroupList: ICategoryGroup[];

  constructor(private httpCategoryGroupService: HttpCategoryGroupService,
              private dialog: MdDialog,
              private snackBar: MdSnackBar,
              private ngZone: NgZone) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getCategoryGroupBySectionId(this.sectionId);
  }

  getCategoryGroupBySectionId(id: number) {
    this.httpCategoryGroupService.findCategoryGroupBySectionId(id)
      .subscribe(resp => {
        this.ngZone.run(() => {
          this.categoryGroupList = resp.json();
        });
      });
  }

  addCategoryGroup(newCategoruGroup: ICategoryGroup) {
    this.httpCategoryGroupService.create(newCategoruGroup)
      .subscribe(resp => {
        this.openSnackBar(this.action);
        this.getCategoryGroupBySectionId(this.sectionId);
      });
  }

  updateCategoryGroup(changedCategoryGroup: ICategoryGroup) {
    this.httpCategoryGroupService.update(changedCategoryGroup)
      .subscribe(resp => {
        this.openSnackBar(this.action);
        this.getCategoryGroupBySectionId(this.sectionId);
      });
  }

  removeCategoruGroup(removeCategoryGroup: ICategoryGroup) {
    this.httpCategoryGroupService.delete(removeCategoryGroup.id)
      .subscribe(resp => {
        this.openSnackBar(this.action);
        this.getCategoryGroupBySectionId(this.sectionId);
      });
  }

  openDialog(obj: any, currentAction) {
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
          if (this.action === "Create") {
            this.addCategoryGroup(res);
          } else if (this.action === "Update") {
            this.updateCategoryGroup(res);
          } else {
            this.removeCategoruGroup(res)
          }
        }
      });
  }

  openSnackBar(currentAction: string) {
    this.snackBar.open("CategoryGroup has been: ", currentAction, {
      duration: 1000,
    });
  }

  ngOnDestroy(): void {
    //Unsubscribe metod
  }
}
