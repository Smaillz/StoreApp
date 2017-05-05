import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {ISection} from "../model/ISection";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ExchangeDataService{

  private subjectSection:Subject<ISection>;

  constructor(){
    this.subjectSection = new Subject<ISection>();
  }

  getDataSection(): Observable<ISection> {
    return this.subjectSection.asObservable();
  }

  setDataSection(section: ISection) {
    this.subjectSection.next(section);
  }

}
