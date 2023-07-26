export default function Item({ item, handleDeleteItem, handleToggleItem }) {
  return (
    <li style={item.packed ? { textDecoration: "line-through" } : {}}>
      <input type="checkbox" onClick={() => handleToggleItem(item.id)} />
      <span>
        {item.quantity} {item.description}{" "}
        <button onClick={() => handleDeleteItem(item.id)}>❌</button>
      </span>
    </li>
  );
}
