import React  from "react";
import GroceryList from "./containers/GroceryList";
import GroceryInput from "./containers/GroceryInput";

const App = (): JSX.Element => (
  <>
    <GroceryInput />
    <GroceryList />
  </>
);

export default App;
