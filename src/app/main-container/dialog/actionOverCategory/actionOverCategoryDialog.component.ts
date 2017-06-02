import {Component, Inject} from "@angular/core";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {ISection} from "../../../model/ISection";
import {ICategory} from "../../../model/ICategory";
import {ActionOverDialog} from "../ActionOverDialog";

@Component({
  selector: "addSection-dialog",
  styleUrls: ["actionOverCategoryDialog.component.less"],
  templateUrl: "actionOverCategoryDialog.component.html",
})
export class ActionOverCategoryDialog extends ActionOverDialog<ICategory>{

  constructor(private dialogRef: MdDialogRef<ISection>,
              @Inject(MD_DIALOG_DATA) private data: any) {
    super(data);
  }
}

