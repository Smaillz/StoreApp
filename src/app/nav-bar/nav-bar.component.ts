import {Component, OnDestroy} from '@angular/core';
import {HttpSectionService} from "../service/http.section.service";

@Component({
  selector: 'nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['nav-bar.component.less'],
})
export class NavBarComponent implements OnDestroy{

  constructor(private httpSectionService: HttpSectionService) {
  }

  getSectionById(id: number) {
    this.httpSectionService.read(id)
      .subscribe(resp => {
      });
  }

  ngOnDestroy(): void {
    //Unsubscribe metod
  }
}
