import {Component} from "@angular/core";
import {loadBanner} from "../../../animation/banner.animation";

@Component({
  selector: "middle-banner",
  templateUrl: "banner.component.html",
  styleUrls: ["banner.component.less"],
  animations: [loadBanner()],
  host: {'[@hostedLoad]': ''}
})
export class BannerComponent {

}

