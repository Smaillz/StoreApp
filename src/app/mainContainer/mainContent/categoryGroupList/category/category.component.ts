import {Component, Input, NgZone, OnChanges, OnDestroy, SimpleChanges} from "@angular/core";
import {MdDialog, MdDialogConfig, MdSnackBar} from "@angular/material";
import {ICategory} from "../../../../model/ICategory";
import {Subscription} from "rxjs/Subscription";
import {ActionOverCategoryDialog} from "../../../dialog/actionOverCategory/actionOverCategoryDialog.component";
import {HttpService} from "../../../../service/http.service";

@Component({
  selector: "category",
  templateUrl: "category.component.html",
  styleUrls: ["category.component.less"],
})
export class CategoryComponent implements OnChanges, OnDestroy {

  @Input() categoryGroupId: number;

  private categoryes: ICategory[];
  private action: string;
  private subscription: Subscription = new Subscription();
  private doAction = {
    delete: this.removeCategory,
    create: this.addCategory,
    update: this.editCategory
  };

  constructor(private httpService: HttpService,
              private dialog: MdDialog,
              private snackBar: MdSnackBar,
              private ngZone: NgZone) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getAllCategoryByCategoryGroupId(this.categoryGroupId);
  }

  getAllCategoryByCategoryGroupId(id: number) {
    this.subscription.add(
      this.httpService.findCategoryByCategoryGroupId(id)
        .subscribe(res => {
          this.ngZone.run(() => {
            this.categoryes = res.json();
          })
        })
    );
  }

  addCategory(newCategory: ICategory) {
    this.subscription.add(
      this.httpService.createCategory(newCategory)
        .subscribe(res => {
          this.openSnackBar(this.action);
          this.getAllCategoryByCategoryGroupId(this.categoryGroupId);
        })
    );
  }

  editCategory(category: ICategory) {
    this.subscription.add(
      this.httpService.updateCategory(category)
        .subscribe(res => {
          this.openSnackBar(this.action);
          this.getAllCategoryByCategoryGroupId(this.categoryGroupId);
        })
    );
  }

  removeCategory(category: ICategory) {
    this.subscription.add(
      this.httpService.deleteCategory(category.id)
        .subscribe(res => {
          this.openSnackBar(this.action);
          this.getAllCategoryByCategoryGroupId(this.categoryGroupId);
        })
    );
  }

  openDialog(obj: any, currentAction: string) {
    this.action = currentAction;

    const config: MdDialogConfig = {
      data: {
        enty: obj,
        action: this.action
      }
    };
    const dialogRef = this.dialog.open(ActionOverCategoryDialog, config);

    dialogRef.afterClosed()
      .subscribe(res => {
        if (res) {
          this.doAction[this.action].bind(this)(res);
        }
      });
  }

  openSnackBar(action: string) {
    this.snackBar.open("Category has been: ", action, {
      duration: 1000,
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
