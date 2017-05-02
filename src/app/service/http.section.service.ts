import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Subject} from 'rxjs/Subject';
import {ISection} from "../model/ISection";

@Injectable()
export class HttpSectionService {

  private URL: string;
  private subject;
  private headers: Headers;

  constructor(private http: Http) {
    this.URL = "http://localhost:8080/sections/";
    this.subject = new Subject<ISection>();
    this.headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'});
  }

  create(newSection: ISection) {
    return this.http.post(this.URL + 'add', JSON.stringify(newSection), {headers: this.headers})
      .catch((err: any) => {
        return Observable.throw(err);
      });
  }

  read(id: number) {
    return this.http.get(this.URL + 'get/' + id)
      .catch((err: any) => {
          return Observable.throw(err);
        }
      );
  }

  update(upSection: ISection) {
    return this.http.post(this.URL + 'update', JSON.stringify(upSection), {headers: this.headers})
      .catch((err: any) => {
        return Observable.throw(err);
      });
  }

  delete(id: number) {
    return this.http.get(this.URL + 'delete/' + id)
      .catch((err: any) => {
        return Observable.throw(err);
      });
  }

  findAllSection() {
    return this.http.get(this.URL + 'get')
      .catch((err: any) => {
        return Observable.throw(err);
      });
  }

  getData(): Observable<ISection> {
    return this.subject.asObservable();
  }

  setData(section: ISection) {
    this.subject.next(section);
  }

}


