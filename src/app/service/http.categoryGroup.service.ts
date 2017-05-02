import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {ICategoryGroup} from "../model/ICategoryGroup";

@Injectable()
export class HttpCategoryGroupService {

  private URL: string;
  private headers;

  constructor(private http: Http) {
    this.URL = "http://localhost:8080/categoryGroups/";
    this.headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
  }

  create(newCategoryGroup: ICategoryGroup) {
    return this.http.post(this.URL + 'add', JSON.stringify(newCategoryGroup), {headers: this.headers})
      .catch((err) => {
        return Observable.throw(err);
      });
  }

  read(id: number) {
    return this.http.get(this.URL + 'get/' + id)
      .catch((err) => {
          return Observable.throw(err);
        }
      );
  }

  update(newCategoryGroup: ICategoryGroup) {
    return this.http.post(this.URL + 'update', JSON.stringify(newCategoryGroup), {headers: this.headers})
      .catch((err) => {
        return Observable.throw(err);
      });
  }

  delete(id: number) {
    return this.http.get(this.URL + 'delete/' + id)
      .catch((err) => {
        return Observable.throw(err);
      });
  }

  findAllCategoryGroup() {
    return this.http.get(this.URL + 'get')
      .catch((err) => {
        return Observable.throw(err);
      });
  }

  findCategoryGroupBySectionId(id: number) {
    return this.http.get(this.URL + "getBySection?sectionId=" + id).catch((err: any) => {
      return Observable.throw(err);
    });
  }
}
