import ItemList from "./ItemList";

const Main = ({ items, handleCheck, handleDelete }) => {
  return (
    <main className="main-container">
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is Empty.</p>
      )}
    </main>
  );
};

export default Main;
