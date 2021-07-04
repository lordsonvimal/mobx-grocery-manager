import {makeAutoObservable} from "mobx";
import Grocery from "./Grocery";

class GroceryStore {
  id = 0;
  groceries: Grocery[] = [];

  constructor() {
    makeAutoObservable(this, {
      id: false,
      getGrocery: false
    });
  }

  create = (name: string): void => {
    this.groceries.push(new Grocery(++this.id, name));
  }

  delete = (id: number): void => {
    this.groceries = this.groceries.filter(grocery => grocery.id !== id);
  }

  getGrocery = (id: number): Grocery | undefined => {
    return this.groceries.find(grocery => grocery.id === id);
  }

  get getGroceriesLength(): number {
    return this.groceries.length;
  }
}

export default GroceryStore;
