import React, {useState} from "react";
import {useStore} from "../stores/StoreUtils";

const GroceryInput = (): JSX.Element => {
  const [groceryName, setGroceryName] = useState("");
  const {appStore: {groceryStore}} = useStore();

  return (
    <>
      <input type="text" onChange={event => setGroceryName(event.target.value)} value={groceryName} />
      <button className="btn" onClick={() => {
        setGroceryName("");
        groceryStore.create(groceryName);
      }}>Add</button>
    </>
  );
};

export default GroceryInput;
