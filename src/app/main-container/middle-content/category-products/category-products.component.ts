import {Component, NgZone, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {ICategory} from "../../../model/ICategory";
import {HttpService} from "../../../service/http.service";
import {ExchangeDataService} from "../../../service/exchangeData.service";

@Component({
  selector: "product-category",
  templateUrl: "category-products.component.html",
  styleUrls: ["category-products.component.less"]
})
export class CategoryProductsComponent implements OnInit, OnDestroy {

  private name: string;
  private subscription: Subscription = new Subscription();
  private category: ICategory = <ICategory>{};

  constructor(private activateRoute: ActivatedRoute,
              private httpService: HttpService,
              private exchange: ExchangeDataService,
              private ngZone: NgZone,
              private router: Router,
              private location: Location) {
    this.subscription.add(
      activateRoute.params.subscribe(params => {
        this.name = params["name"];
      }));
  }

  ngOnInit(): void {
    this.getCategoryByUrl(this.name);
  }

  getCategoryByUrl(name: string) {
    this.subscription.add(
      this.httpService.findCategoryByUrlName(name)
        .subscribe(res => {
          this.ngZone.run(() => {
              try {
                this.exchange.spinner = false;
                this.category = res.json();
              } catch (e) {
                this.router.navigateByUrl("404");
              }
            }
          );
        })
    );
  }

  goBack() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
