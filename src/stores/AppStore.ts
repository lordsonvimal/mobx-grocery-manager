import GroceryStore from "./appStores/GroceryStore";
import {makeAutoObservable} from "mobx";

class AppStore {
  groceryStore = new GroceryStore();

  constructor() {
    makeAutoObservable(this);
  }
}

export default AppStore;
