import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {ISection} from "../model/ISection";
import {Observable} from "rxjs/Observable";
import {MdSnackBar} from "@angular/material";

@Injectable()
export class ExchangeDataService{

  private _spinner:boolean = true;
  private _firstEnter:boolean = true;
  private subjectSection:Subject<ISection>;

  constructor(private snackBar: MdSnackBar){
    this.subjectSection = new Subject<ISection>();
  }

  getDataSection(): Observable<ISection> {
    return this.subjectSection.asObservable();
  }

  setDataSection(section: ISection) {
    this.subjectSection.next(section);
  }

  get firstEnter(): boolean{
    return this._firstEnter;
  }

  set firstEnter(val: boolean){
    this._firstEnter = val;
  }

  get spinner(): boolean{
    return this._spinner;
  }

  set spinner(state: boolean){
    this._spinner = state;
  }

  openSnackBar( element:  string, currentAction: string) {
    this.snackBar.open(`${element} has been:`, currentAction, {
      duration: 1000,
    });
  }

}
