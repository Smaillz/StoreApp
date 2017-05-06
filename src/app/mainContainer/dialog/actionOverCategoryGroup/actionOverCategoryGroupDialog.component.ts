import {Component, Inject} from "@angular/core";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {ICategoryGroup} from "../../../model/ICategoryGroup";
import {ActionOverDialog} from "../ActionOverDialog";

@Component({
  selector: 'addCategoryGroup-dialog',
  styleUrls: ['actionOverCategoryGroupDialog.component.less'],
  templateUrl: 'actionOverCategoryGroupDialog.component.html',
})
export class ActionOverDialogCategoryGroup extends ActionOverDialog<ICategoryGroup>{

  constructor(private dialogRef: MdDialogRef<ICategoryGroup>,
              @Inject(MD_DIALOG_DATA) private data: any) {
    super(data);
  }
}
