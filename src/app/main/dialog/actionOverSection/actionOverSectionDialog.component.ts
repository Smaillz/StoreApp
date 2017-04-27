import {Component, Inject} from "@angular/core";
import {HttpSectionService} from "../../../service/http.section.service";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {Section} from "../../../entity/section";

@Component({
  selector: 'addsection-dialog',
  styleUrls:['actionOverSectionDialog.component.less'],
  templateUrl: 'actionOverSectionDialog.component.html',
  providers:[HttpSectionService]
})
export class ActionOverDialogSection {

  action: string;
  section: Section = new Section();

  constructor(public dialogRef: MdDialogRef<any>,@Inject(MD_DIALOG_DATA) public data: any) {
    this.action = this.data.action;
    if(!this.data.enty == null){
      this.section = this.data.enty;
      // console.log(this.section);
    }
  }
}
