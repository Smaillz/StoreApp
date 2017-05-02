import {Component, Inject} from "@angular/core";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {ISection} from "../../../model/ISection";

@Component({
  selector: 'addSection-dialog',
  styleUrls: ['actionOverSectionDialog.component.less'],
  templateUrl: 'actionOverSectionDialog.component.html',
})
export class ActionOverDialogSection {

  private action: string;
  private deleted: boolean;
  private section = <ISection>{};

  constructor(private dialogRef: MdDialogRef<ISection>,
              @Inject(MD_DIALOG_DATA) private data: any) {
    this.action = this.data.action;
    this.section.id = this.data.enty.id;
    if (this.action === "Delete") {
      this.deleted = true;
      this.section = this.data.enty;
    } else if (this.action === "Update") {
      this.section.sectionName = this.data.enty.sectionName;
      this.section.imageId = this.data.enty.imageId;
      this.section.priority = this.data.enty.priority;
    }
  }
}
