import {Component, Inject} from "@angular/core";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {ICategoryGroup} from "../../../model/ICategoryGroup";

@Component({
  selector: 'addCategoryGroup-dialog',
  styleUrls: ['actionOverCategoryGroupDialog.component.less'],
  templateUrl: 'actionOverCategoryGroupDialog.component.html',
})
export class ActionOverDialogCategoryGroup {

  private action: string;
  private deleted: boolean = false;
  private categoryGroup = <ICategoryGroup>{};

  constructor(private dialogRef: MdDialogRef<ICategoryGroup>,
              @Inject(MD_DIALOG_DATA) private data: any) {
    this.action = this.data.action;
    if (this.action === "Delete") {
      this.deleted = true;
      this.categoryGroup = this.data.enty;
    }
    this.categoryGroup.sectionId = this.data.enty.sectionId;
    if (this.action === "Update") {
      this.categoryGroup.id = this.data.enty.id;
      this.categoryGroup.categoryGroupName = this.data.enty.categoryGroupName;
      this.categoryGroup.priority = this.data.enty.priority;
      this.categoryGroup.categories = this.data.enty.categories;
    }
  }
}
