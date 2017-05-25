import {Component, Input, NgZone, OnChanges, OnDestroy, SimpleChanges} from "@angular/core";
import {MdDialog, MdDialogConfig} from "@angular/material";
import {ICategory} from "../../../../model/ICategory";
import {Subscription} from "rxjs/Subscription";
import {ActionOverCategoryDialog} from "../../../dialog/actionOverCategory/actionOverCategoryDialog.component";
import {HttpService} from "../../../../service/http.service";
import {ExchangeDataService} from "../../../../service/exchangeData.service";

@Component({
  selector: "category",
  templateUrl: "category.component.html",
  styleUrls: ["category.component.less"],
})
export class CategoryComponent implements OnChanges, OnDestroy {

  @Input() categoryGroupId: number;

  private componentName = "Category";
  private categoryes;
  private action: string;
  private subscription: Subscription = new Subscription();
  private doAction = {
    delete: this.removeCategory,
    create: this.addCategory,
    update: this.editCategory
  };

  constructor(private httpService: HttpService,
              private exchangeDataService: ExchangeDataService,
              private dialog: MdDialog,
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
            this.exchangeDataService.spinner = false;
            this.categoryes = <ICategory[]>res.json();
          })
        })
    );
  }

  addCategory(newCategory: ICategory) {
    this.exchangeDataService.spinner = true;
    this.subscription.add(
      this.httpService.createCategory(newCategory)
        .subscribe(() => {
          this.exchangeDataService.openSnackBar(this.componentName,this.action);
          this.getAllCategoryByCategoryGroupId(this.categoryGroupId);
        })
    );
  }

  editCategory(category: ICategory) {
    this.exchangeDataService.spinner = true;
    this.subscription.add(
      this.httpService.updateCategory(category)
        .subscribe(() => {
          this.getAllCategoryByCategoryGroupId(this.categoryGroupId);
          this.exchangeDataService.openSnackBar(this.componentName,this.action);
        })
    );
  }

  removeCategory(category: ICategory) {
    this.exchangeDataService.spinner = true;
    this.subscription.add(
      this.httpService.deleteCategory(category.id)
        .subscribe(() => {
          this.getAllCategoryByCategoryGroupId(this.categoryGroupId);
          this.exchangeDataService.openSnackBar(this.componentName,this.action);
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
