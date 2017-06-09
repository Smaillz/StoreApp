import {Component, NgZone, OnChanges, OnDestroy, OnInit} from "@angular/core";
import {ExchangeDataService} from "../../../service/exchangeData.service";
import {HttpService} from "../../../service/http.service";
import {Subscription} from "rxjs/Subscription";
import {IProperty} from "../../../model/IProperty";
import {dropProp} from "../../animation/prop-form.animation";

@Component({
  selector: "prop-list",
  templateUrl: "properties-list.component.html",
  styleUrls: ["properties-list.component.less"],
  animations: [dropProp()],
})
export class PropertiesListComponent implements OnInit, OnDestroy {

  private subscription = new Subscription();
  private properties: IProperty[];
  private properties2: IProperty[] = [];
  private selectedProp = <IProperty>{};
  private next: number = 0;

  constructor(private exchange: ExchangeDataService,
              private httpService: HttpService,
              private ngZone: NgZone) {
  }

  goNext() {
    console.log("asd");
    if (this.next < this.properties2.length) {
      this.properties2.push(this.properties[this.next++]);
    }
  }

  ngOnInit(): void {
    this.getAllProperties();
  }

  getAllProperties() {
    this.exchange.spinner = true;
    this.subscription.add(
      this.httpService.findAllProperty()
        .subscribe(data => {
          this.ngZone.run(() => {
            this.properties = <IProperty[]>data.json();
            this.exchange.spinner = false;
            this.goNext();
          })
        })
    );
  }

  selectedProperty(prop: IProperty) {
    this.selectedProp = prop;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
