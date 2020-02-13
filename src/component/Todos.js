import React, { Component } from 'react'
import TodoItems from './TodoItems'
import AddTodo from './AddTodo'

export class Todos extends Component {

    state = {
        todos: [
            {
                id: 1,
                title: "a1",
                completed: true
            },
            {
                id: 2,
                title: "a2",
                completed: true
            }, {
                id: 3,
                title: "a3",
                completed: false
            }
        ],
        subject: [
            {
                id: 1,
                title: "s1",
                completed: true
            },
            {
                id: 2,
                title: "s2",
                completed: true
            }, {
                id: 3,
                title: "s3",
                completed: false
            }
        ],
        isEdit : false,
        itemEdit: {}
        

    }

    changeCheck = (id) => {
        const todoChange = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })
        this.setState({
            todos: todoChange
        })

    }

    delItem = (id) => {
        const todoChange = this.state.todos.filter((todo) => {
            return todo.id !== id;
        })
        this.setState({
            todos: todoChange
        })
    }

    editItem = (id) => {
        console.log(id)
        const itemEdit = this.state.todos.find((x=>x.id === id));
      
      if(itemEdit){
        this.setState({
            isEdit: true,
            itemEdit : itemEdit
        })
      }
       
    }

    saveChangeItem =() =>{

    }

    cancelEdit = () =>{
        this.setState({
            isEdit :false,
            itemEdit :{}
        })
    }

    addItem = (title)=>{
        if(!title) return;
        const newTodo = {
            id:  this.uuidv4(),
            title: title,
            completed: false
        }
        this.setState({
            todos : [...this.state.todos, newTodo]
        })

    }

    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 || 0x8);
          return v.toString(16);
        });
      }


    render() {
        return (
            <div>
                <AddTodo addItem= {this.addItem} isEdit={this.state.isEdit} itemEdit = {this.state.itemEdit} cancelEdit ={this.cancelEdit}  />
                <TodoItems todos={this.state.todos} changeCheck={this.changeCheck} delItem={this.delItem}  editItem={this.editItem} />
            </div>
        )
    }
}

export default Todos
