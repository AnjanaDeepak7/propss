import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li>
      <li className="list-item" id={item.id}>
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => handleCheck(item.name)}
        />
        <label
          style={item.checked ? { textDecoration: "line-through" } : null}
          onDoubleClick={() => handleCheck(item.name)}
        >
          {item.name}
        </label>
        <FaTrashAlt
          role="button"
          tabIndex="0"
          onClick={() => handleDelete(item.name)}
          aria-label={`Delete ${item.item}`}
        />
      </li>
    </li>
  );
};

export default LineItem;
