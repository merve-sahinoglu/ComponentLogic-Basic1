import { useState } from "react";
import ListGroup from "./component/ListGroup";
import Alert from "./component/Alert";

function App() {
  const [alertVisible,setAlertVisibility]=useState(false);
  let items = ["New York", "San Francisco"];

  const onSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {alertVisible && <Alert onClose={() =>setAlertVisibility(true)}>My Alert</Alert>}
      <ListGroup items={items} heading="Slm" onSelectItem={onSelectItem} />
    </div>
  );
}

export default App;
