import ListGroup from "./components/ListGroup";

function App() {
  let items = ["new york", "san francisco", "los angeles", "filadelphia"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
