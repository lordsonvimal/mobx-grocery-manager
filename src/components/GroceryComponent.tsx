import React from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../stores/StoreUtils";

const GroceryComponent = ({ groceryId }: { groceryId: number }): JSX.Element | null => {
  const { appStore: {groceryStore} } = useStore();
  const grocery = groceryStore.getGrocery(groceryId);
  if (!grocery) return null;
  return (
    <div key={grocery.id}>
      <span>{grocery.name}</span>
      <button className="btn" key={`button_${grocery.id}`} onClick={() => groceryStore.delete(grocery.id)}>Delete</button>
    </div>
  );
};

export default observer(GroceryComponent);
