import {Component} from "@angular/core";
import {ExchangeDataService} from "../../service/exchangeData.service";

@Component({
  selector: "spinner",
  templateUrl: "spinner.component.html",
  styleUrls: ["spinner.component.less"]
})
export class SpinnerComponent {
      constructor(private data: ExchangeDataService){
      }
}
