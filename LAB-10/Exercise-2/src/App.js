import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]); // list
  const [input, setInput] = useState(""); // input field

  const addItem = () => {
    if (input.trim() === "") return;

    const newItem = {
      id: Date.now(),
      text: input
    };

    setItems([...items, newItem]);
    setInput("");
  };

  const removeItem = (id) => {
    const updatedList = items.filter(item => item.id !== id);
    setItems(updatedList);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Task List</h1>

      <input
        type="text"
        placeholder="Enter item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addItem}>Add</button>

      {items.length === 0 ? (
        <p>No items in the list</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.text}
              <button onClick={() => removeItem(item.id)}>❌</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;