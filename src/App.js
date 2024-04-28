import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Vampire Diaries",
      platform: "Amazon Prime & Netflix",
      checked: false,
    },
    {
      id: 2,
      name: "The Originals",
      platform: "Amazon Prime & Netflix",
      checked: false,
    },
    {
      id: 3,
      name: "Money Heist",
      platform: "Netflix",
      checked: false,
    },
    {
      id: 4,
      name: "Suits",
      platform: "Netflix",
      checked: false,
    },
  ]);

  const handleCheck = (name) => {
    const listItems = items.map((item) =>
      item.name === name ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("seriesList", JSON.stringify(listItems));
  };

  const handleDelete = (name) => {
    const listItems = items.filter((item) => item.name !== name);
    setItems(listItems);
    localStorage.setItem("seriesList", JSON.stringify(listItems));
  };

  return (
    <div className="App">
      <Header />
      <Main
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
