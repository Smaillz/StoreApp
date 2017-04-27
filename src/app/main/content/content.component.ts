import {Component, OnInit} from "@angular/core";
import {Section} from "../../entity/section";
import {HttpSectionService} from "../../service/http.section.service";

@Component({
  selector: 'content-mane-pane',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.less'],
  providers: [HttpSectionService]
})
export class ContentComponent implements OnInit{

  sections:Section[];

  constructor(private httpSectionService : HttpSectionService){  }

  ngOnInit(): void {
    this.getAllSection();
  }

  getAllSection(){
    this.httpSectionService.findAllSection().subscribe((resp)=>{
      this.sections = resp.json();
      console.log(this.sections);
    });
  }

}
