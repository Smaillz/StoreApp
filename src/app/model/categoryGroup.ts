import {Category} from "./category";

export interface CategoryGroup{
  id:number;
  categoryGroupName:string;
  sectionId:number;
  categories:Category[];
  priority:number;
}
