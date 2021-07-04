import React from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../stores/StoreUtils";
import GroceryComponent from "../components/GroceryComponent";

const GroceryList = (): JSX.Element => {
  const {appStore} = useStore();
  const {groceryStore} = appStore;
  return (
    <>
      {groceryStore.groceries.map(grocery => <GroceryComponent key={grocery.id} groceryId={grocery.id}/>)}
    </>
  );
};

export default observer(GroceryList);
