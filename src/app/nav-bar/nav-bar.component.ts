import {Component} from '@angular/core';
import {HttpSectionService} from "../service/http.section.service";
import {Section} from "../entity/section";

@Component({
  selector: 'nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['nav-bar.component.less'],
  providers: [HttpSectionService]
})
export class NavBarComponent {

  sectionId:string;
  sec:Section = new Section();

  constructor(private httpSectionService : HttpSectionService){  }

  getSectionById(id:number){
    this.sectionId = "";
    this.httpSectionService.read(id).subscribe((resp:any)=> {
        console.log(resp.json());
      }
    );
  }

  addSection(name:string,priority:number,imgId:number){
    this.sec.sectionName = name;
    this.sec.priority = priority;
    this.sec.imageId = imgId;
    this.httpSectionService.create(this.sec).subscribe((resp:any)=> {
        console.log(resp.json());
      }
    );
  }
}
