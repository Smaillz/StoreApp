import {Component, DoCheck} from "@angular/core";
import {ExchangeDataService} from "../../service/exchangeData.service";

@Component({
  selector: "spinner",
  templateUrl: "spinner.component.html",
  styleUrls: ["spinner.component.less"]
})
export class SpinnerComponent implements DoCheck {

  private loadSpinner = {
    spinnerload: true,
  };

  ngDoCheck(): void {
    this.loadSpinner.spinnerload = this.data.spinner;
  }

  constructor(private data: ExchangeDataService) {

  }
}
