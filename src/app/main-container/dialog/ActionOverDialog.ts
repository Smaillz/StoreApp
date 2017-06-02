export class ActionOverDialog<T> {

  protected entity = <T>{};
  protected action: string;

  constructor(data:any) {
    this.action=data.action;
    Object.assign(this.entity,data.enty);
  }
}
