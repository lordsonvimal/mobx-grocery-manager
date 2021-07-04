import {makeAutoObservable} from "mobx";

class Grocery {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    makeAutoObservable(this, {
      id: false
    });
  }
}

export default Grocery;
