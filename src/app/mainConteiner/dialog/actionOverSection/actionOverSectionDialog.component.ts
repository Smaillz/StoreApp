import {Component, Inject} from "@angular/core";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {Section} from "../../../model/section";

@Component({
  selector: 'addsection-dialog',
  styleUrls:['actionOverSectionDialog.component.less'],
  templateUrl: 'actionOverSectionDialog.component.html',
})
export class ActionOverDialogSection {

  action: string;
  section: Section;

  constructor(public dialogRef: MdDialogRef<any>,@Inject(MD_DIALOG_DATA) public data: any) {
    this.section = <Section>{};
    this.action = this.data.action;
    if(!this.data.enty == null){
      this.section = this.data.enty;
    }
  }
}
