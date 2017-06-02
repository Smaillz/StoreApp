import {Component, Inject} from "@angular/core";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {ISection} from "../../../model/ISection";
import {ActionOverDialog} from "../ActionOverDialog";

@Component({
  selector: 'addSection-dialog',
  styleUrls: ['actionOverSectionDialog.component.less'],
  templateUrl: 'actionOverSectionDialog.component.html',
})
export class ActionOverDialogSection extends ActionOverDialog<ISection> {

  constructor(private dialogRef: MdDialogRef<ISection>,
              @Inject(MD_DIALOG_DATA) private data: any) {
    super(data);
  }
}
