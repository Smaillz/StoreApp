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
  private doAction = {
    delete: this.onDelete,
    create: this.onCreate,
    update: this.onCreate
  };

  constructor(private dialogRef: MdDialogRef<ICategoryGroup>,
              @Inject(MD_DIALOG_DATA) private data: any) {
    this.action = this.data.action;
    this.categoryGroup.sectionId = this.data.enty.sectionId;
    this.doAction[this.action].bind(this)();
  }

  onDelete() {
    this.deleted = true;
    this.categoryGroup = this.data.enty;
  }

  onCreate() {
    this.categoryGroup.id = this.data.enty.id;
    this.categoryGroup.categoryGroupName = this.data.enty.categoryGroupName;
    this.categoryGroup.priority = this.data.enty.priority;
    this.categoryGroup.categories = this.data.enty.categories;
  }
}
