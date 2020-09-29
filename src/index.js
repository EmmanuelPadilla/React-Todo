import React from "react";
import ReactDOM from "react-dom";
// import App from './App';

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

const tasks = [
  {
    name: "read",
    id: 123,
    done: false,
  },
  {
    name: "write",
    id: 124,
    done: false,
  },
  {
    name: "clean",
    id: 125,
    done: false,
  },
  {
    name: "mop",
    id: 126,
    done: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks,
    };
  }

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      done: false,
    };
    this.setState({
      tasks: [...this.state.tasks, newItem],
    });
  };
  toggleItem = (itemId) => {
    console.log(itemId);
    this.setState({
      tasks: this.state.tasks.map((item) => {
        if (itemId === item.id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      }),
    });
  };

  clearDone = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter((item) => !item.done),
    });
  };
  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleItem={this.toggleItem}
          clearDone={this.clearDone}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
