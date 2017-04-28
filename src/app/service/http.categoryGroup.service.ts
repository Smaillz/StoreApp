import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {CategoryGroup} from "../model/categoryGroup";
import {Observable} from "rxjs/Observable";

@Injectable()
export class HttpCategoryGroupService {

  categoryGroup: CategoryGroup;
  URL: string = "http://localhost:8080/categoryGroups/";

  constructor(private http: Http) {
    this.categoryGroup = <CategoryGroup>{};
  }

  create(newCategoryGroup: CategoryGroup) {
    let headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
    return this.http.post(this.URL + 'add', JSON.stringify(newCategoryGroup), {headers: headers})
      .catch((error: any) => {
        return Observable.throw(error);
      });
  }

  read(id: number){
    return this.http.get(this.URL + 'get/' + id)
      .catch((err: any) => {
          return Observable.throw(err);
        }
      );
  }

  update(newCategoryGroup: CategoryGroup){
    let headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
    return this.http.post(this.URL + 'update', JSON.stringify(newCategoryGroup), {headers: headers})
      .catch((error: any) => {
        return Observable.throw(error);
      });
  }

  delete(id:number){
    return this.http.get(this.URL + 'delete/' + id).catch((err: any) => {
      return Observable.throw(err);
    });
  }

  findAllCategoryGroup() {
    return this.http.get(this.URL + 'get').catch((err: any) => {
      return Observable.throw(err);
    });
  }
}
