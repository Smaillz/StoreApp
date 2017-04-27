import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Section} from "../entity/section";

@Injectable()
export class HttpSectionService {

  section: Section = new Section();
  URL: string = "http://localhost:8080/sections/";

  constructor(private http: Http) {
  }

  create(newSection: Section) {
    let headers = new Headers({'Accept': 'application/json','Content-Type': 'application/json'});
    return this.http.post(this.URL + 'add', JSON.stringify(newSection), {headers: headers})
      .catch((error: any) => {
        return Observable.throw(error);
      });
    ;
  }

  read(id: number){
    return this.http.get(this.URL + 'get/' + id)
      .catch((err: any) => {
          return Observable.throw(err);
        }
      );
  }

  update(upSection: Section){
    let headers = new Headers({'Accept': 'application/json','Content-Type': 'application/json'});
    return this.http.post(this.URL + 'update', JSON.stringify(upSection), {headers: headers})
      .catch((error: any) => {
        return Observable.throw(error);
      });
    ;
  }

  delete(id:number){
    return this.http.get(this.URL + 'delete/' + id).catch((err: any) => {
      return Observable.throw(err);
    });
  }

  findAllSection() {
    return this.http.get(this.URL + 'get').catch((err: any) => {
      return Observable.throw(err);
    });
  }
}


