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
        isEdit: false,
        isCreate: false,
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

        const itemEdit = this.state.todos.find((x => x.id === id));

        if (itemEdit) {
            this.setState({
                isEdit: true,
                itemEdit: itemEdit
            })
        }

    }

    saveChangeItem = (item) => {

     
        if(!item.id){
            const newTodo = {
                id:  this.uuidv4(),
                title: item.title,
                completed: false
            }
            this.setState({
                todos: [...this.state.todos, newTodo],
                isEdit: false,
                isCreate: false,
                itemEdit: {}
            })
        }
        else{
          let newTodos =  this.state.todos.map((todo)=>{
                if(todo.id == item.id ){
                    todo.completed  = item.completed ;
                    todo.title = item.title ;
                }
                return todo;
            })
            this.setState({
                todos: newTodos,
                isEdit: false,
                isCreate: false,
                itemEdit: {}
            }) 

        }
     
    }

    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 || 0x8);
            return v.toString(16);
        });
    }

    addClick = () => {
        this.setState({
            isCreate: true
        })
    }


    render() {
        let itemForm;
        if (this.state.isEdit || this.state.isCreate) {
            itemForm = <AddTodo itemEdit={this.state.itemEdit} saveChangeItem={this.saveChangeItem} />
        }
        return (
            <div>
                <button onClick={this.addClick}> Add</button>
                {itemForm}
                <TodoItems todos={this.state.todos} changeCheck={this.changeCheck} delItem={this.delItem} editItem={this.editItem} />
            </div>
        )
    }
}

export default Todos
