import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>no items found</p>}
      <ul className="list-group">
        {items.map((item, i) => (
          <li
            onClick={() => {
              setSelectedIndex(i);
              onSelectItem(item);
            }}
            key={item}
            className={
              selectedIndex === i ? "list-group-item active" : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
