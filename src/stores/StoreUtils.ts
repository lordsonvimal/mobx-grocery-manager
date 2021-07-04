import RootStore from "./RootStore";
import {createContext, useContext} from "react";

export const createStore = (): RootStore => new RootStore();

export const StoreContext = createContext<RootStore>({} as RootStore);

export const StoreProvider = StoreContext.Provider;

export const useStore = (): RootStore => useContext(StoreContext);
