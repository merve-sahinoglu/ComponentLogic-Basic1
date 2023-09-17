import ListGroup from "./component/ListGroup";

function App() {
  let items = ["New York", "San Francisco"];

  const onSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup items={items} heading="Slm" onSelectItem={onSelectItem} />
    </div>
  );
}

export default App;
