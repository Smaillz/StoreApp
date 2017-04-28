import {Component} from '@angular/core';
import {HttpSectionService} from "../service/http.section.service";
import {Section} from "../model/section";

@Component({
  selector: 'nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['nav-bar.component.less'],
})
export class NavBarComponent {

  sectionId:string;
  section:Section;

  constructor(private httpSectionService : HttpSectionService){
    this.section = <Section>{}
  }

  getSectionById(id:number){
    this.httpSectionService.read(id).subscribe((resp:any)=> {
        console.log(resp.json());
      }
    );
  }
}
