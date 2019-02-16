import React, { Component } from 'react';
import Todo from "./component/todo"
import './App.css';

class App extends Component {
  state={
    todos:[
      {
        id:1,
        title:"hihi",
        completed:false
      },   {
        id:2,
        title:"hai nha",
        completed:false
      },   {
        id:3,
        title:"3 nha",
        completed:true
      },   {
        id:4,
        title:"4 nhas",
        completed:false
      },   {
        id:5,
        title:"5 ne",
        completed:false
      }
    ]
  }
  render() {
    return (
      <div className="App">
      <Todo todos={this.state.todos}></Todo>
      </div>
    );
  }
}

export default App;
