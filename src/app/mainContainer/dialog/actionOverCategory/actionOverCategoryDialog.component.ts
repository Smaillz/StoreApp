import {Component, Inject} from "@angular/core";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {ISection} from "../../../model/ISection";
import {ICategory} from "../../../model/ICategory";

@Component({
  selector: "addSection-dialog",
  styleUrls: ["actionOverCategoryDialog.component.less"],
  templateUrl: "actionOverCategoryDialog.component.html",
})
export class ActionOverCategoryDialog {

  private action: string;
  private deleted: boolean;
  private category = <ICategory>{};
  private doAction = {
    delete: this.onDelete,
    create: this.onCreate,
    update: this.onCreate
  };

  constructor(private dialogRef: MdDialogRef<ISection>,
              @Inject(MD_DIALOG_DATA) private data: any) {
    this.action = this.data.action;
    this.category.id = this.data.enty.id;
    this.doAction[this.action].bind(this)();
  }

  onDelete() {
    this.deleted = true;
    this.category = this.data.enty;
  }

  onCreate() {
    this.category.categoryGroupId = this.data.enty.categoryGroupId;
    this.category.categoryName = this.data.enty.categoryName;
    this.category.imageId = this.data.enty.imageId;
    this.category.priority = this.data.enty.priority;
    this.category.urlName = this.data.enty.urlName;
  }
}

