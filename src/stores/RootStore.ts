import AppStore from "./AppStore";
import UiStore from "./UiStore";
import {makeAutoObservable} from "mobx";

class RootStore {
  appStore = new AppStore();
  uiStore = new UiStore();

  constructor() {
    makeAutoObservable(this);
  }
}

export default RootStore;
