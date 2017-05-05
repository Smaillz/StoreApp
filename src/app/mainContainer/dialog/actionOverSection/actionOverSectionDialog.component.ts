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
  private doAction = {
    delete: this.onDelete,
    create: this.onCreate,
    update: this.onCreate
  };

  constructor(private dialogRef: MdDialogRef<ISection>,
              @Inject(MD_DIALOG_DATA) private data: any) {
    this.action = this.data.action;
    this.section.id = this.data.enty.id;
    this.doAction[this.action].bind(this)();
  }

  onDelete() {
    this.deleted = true;
    this.section = this.data.enty;
  }

  onCreate() {
    this.section.sectionName = this.data.enty.sectionName;
    this.section.imageId = this.data.enty.imageId;
    this.section.priority = this.data.enty.priority;
  }
}

