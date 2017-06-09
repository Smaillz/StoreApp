import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {ISection} from "../model/ISection";
import {ICategory} from "../model/ICategory";
import {ICategoryGroup} from "../model/ICategoryGroup";
import {IProperty} from "../model/IProperty";

@Injectable()
export class HttpService {

  private URL: string;
  private headers: Headers;

  constructor(private http: Http) {
    this.URL = "http://localhost:8080/";
    this.headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'});
  }

  // Section
  createSection(newSection: ISection) {
    return this.http.post(this.URL + 'sections/add', JSON.stringify(newSection), {headers: this.headers})
      .catch((err: any) => {
        return Observable.throw(err);
      });
  }

  readSection(id: number) {
    return this.http.get(this.URL + 'sections/get/' + id)
      .catch((err: any) => {
          return Observable.throw(err);
        }
      );
  }

  updateSection(upSection: ISection) {
    return this.http.post(this.URL + 'sections/update', JSON.stringify(upSection), {headers: this.headers})
      .catch((err: any) => {
        return Observable.throw(err);
      });
  }

  deleteSection(id: number) {
    return this.http.get(this.URL + 'sections/delete/' + id)
      .catch((err: any) => {
        return Observable.throw(err);
      });
  }

  findAllSection() {
    return this.http.get(this.URL + 'sections/get')
      .catch((err: any) => {
        return Observable.throw(err);
      });
  }

  // CategoryGroup
  createCategoryGroup(newCategoryGroup: ICategoryGroup) {
    return this.http.post(this.URL + 'categoryGroups/add', JSON.stringify(newCategoryGroup), {headers: this.headers})
      .catch((err) => {
        return Observable.throw(err);
      });
  }

  readCategoryGroup(id: number) {
    return this.http.get(this.URL + 'categoryGroups/get/' + id)
      .catch((err) => {
          return Observable.throw(err);
        }
      );
  }

  updateCategoryGroup(newCategoryGroup: ICategoryGroup) {
    return this.http.post(this.URL + 'categoryGroups/update', JSON.stringify(newCategoryGroup), {headers: this.headers})
      .catch((err) => {
        return Observable.throw(err);
      });
  }

  deleteCategoryGroup(id: number) {
    return this.http.get(this.URL + 'categoryGroups/delete/' + id)
      .catch((err) => {
        return Observable.throw(err);
      });
  }

  findAllCategoryGroup() {
    return this.http.get(this.URL + 'categoryGroups/get')
      .catch((err) => {
        return Observable.throw(err);
      });
  }

  findCategoryGroupBySectionId(id: number) {
    return this.http.get(this.URL + "categoryGroups/getBySection?sectionId=" + id)
      .catch((err: any) => {
        return Observable.throw(err);
      });
  }

  // Category
  createCategory(newCategory: ICategory) {
    return this.http.post(this.URL + 'categories/add', JSON.stringify(newCategory), {headers: this.headers})
      .catch((err) => {
        return Observable.throw(err);
      });
  }

  readCategory(id: number) {
    return this.http.get(this.URL + 'categories/get/' + id)
      .catch((err) => {
          return Observable.throw(err);
        }
      );
  }

  updateCategory(newCategory: ICategory) {
    return this.http.post(this.URL + 'categories/update', JSON.stringify(newCategory), {headers: this.headers})
      .catch((err) => {
        return Observable.throw(err);
      });
  }

  deleteCategory(id: number) {
    return this.http.get(this.URL + 'categories/delete/' + id)
      .catch((err) => {
        return Observable.throw(err);
      });
  }

  findAllCategory() {
    return this.http.get(this.URL + 'categories/get')
      .catch((err) => {
        return Observable.throw(err);
      });
  }

  findCategoryByCategoryGroupId(id: number) {
    return this.http.get(this.URL + "categories/getByCategoryGroup?categoryGroupId=" + id)
      .catch((err: any) => {
        return Observable.throw(err);
      });
  }

  findCategoryByUrlName(urlName: string) {
    return this.http.get(this.URL + "categories/getByUrl?url=" + urlName)
      .catch((err: any) => {
        return Observable.throw(err);
      });
  }

  //Property
  createProperty(newProperty: IProperty) {
    return this.http.post(this.URL + 'properties/add', JSON.stringify(newProperty), {headers: this.headers})
      .catch((err) => {
        return Observable.throw(err);
      });
  }

  readProperty(id: number) {
    return this.http.get(this.URL + 'properties/get/' + id)
      .catch((err) => {
          return Observable.throw(err);
        }
      );
  }

  updateProperty(newProperty: IProperty) {
    return this.http.post(this.URL + 'properties/update', JSON.stringify(newProperty), {headers: this.headers})
      .catch((err) => {
        return Observable.throw(err);
      });
  }

  deleteProperty(id: number) {
    return this.http.get(this.URL + 'properties/delete/' + id)
      .catch((err) => {
        return Observable.throw(err);
      });
  }

  findAllProperty() {
    return this.http.get(this.URL + 'properties/get')
      .catch((err) => {
        return Observable.throw(err);
      });
  }
}
