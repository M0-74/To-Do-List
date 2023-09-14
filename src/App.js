import React, { Component } from "react";
import ToDoItem from "./components/ToDoItem/ToDoItem";
import AddItem from "./components/AddItem/AddItem";
class App extends Component {
  state = {
    items: [
      { id: 1, name: "Mohamed", age: 22 },
      { id: 2, name: "Ayman", age: 26 },
      { id: 3, name: "Haneen", age: 10 },
    ],
  };
  deleteItem = (id) => {
    let items = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({ items });
  };

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
  };
  render() {
    return (
      <div className="App container">
        <h1 className="text-align">To Do List</h1>
        <ToDoItem item={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
