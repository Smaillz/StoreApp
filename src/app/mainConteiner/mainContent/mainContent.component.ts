import {Component, OnInit} from "@angular/core";
import {Section} from "../../model/section";
import {HttpSectionService} from "../../service/http.section.service";

@Component({
  selector: 'main-content',
  templateUrl: 'mainContent.component.html',
  styleUrls: ['mainContent.component.less'],
})
export class MainContent implements OnInit{

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

  static goTo(){
    console.log("heloo");
  }

}
