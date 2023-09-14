import React from "react";
import "./ToDoItem.css";
const ToDoItem = (props) => {
  const { item, deleteItem } = props;
  let len = item.length;
  const ListItem = len ? (
    item.map((item) => {
      return (
        <div key={item.id}>
          <span className="name">{item.name}</span>
          <span className="age">{item.age}</span>
          <span className="action icon" onClick={() => deleteItem(item.id)}>
            &times;
          </span>
        </div>
      );
    })
  ) : (
    <p>There Is No Item To Show</p>
  );
  return (
    <div className="ListItem">
      <div>
        <span className="name title">Name</span>
        <span className="age title">Age</span>
        <span className="action title">Action</span>
      </div>
      {ListItem}
    </div>
  );
};
export default ToDoItem;
