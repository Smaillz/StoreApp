import {Component, NgZone, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpService} from "../service/http.service";
import {ICategory} from "../model/ICategory";
import {Location} from "@angular/common";

@Component({
  selector: "product-container",
  templateUrl: "productContainer.component.html",
  styleUrls: ["productContainer.component.less"]
})
export class ProductContainerComponent implements OnInit, OnDestroy {

  private name: string;
  private subscription: Subscription = new Subscription();
  private category: ICategory = <ICategory>{};

  constructor(private activateRoute: ActivatedRoute,
              private httpService: HttpService,
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
                this.category = res.json();
              } catch (e) {
                this.router.navigateByUrl("404");
              }
            }
          );
        })
    );
  }

  goBack(){
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
