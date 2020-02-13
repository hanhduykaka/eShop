import React, { Component } from 'react'

export class TodoItems extends Component {


    render() {
        const todos = this.props.todos;

        const getStyle = (item) => {
            return {
                color: item.completed ? 'red' : 'green',
                textDecoration: item.completed ? 'line-through' : 'none',
                listStyle: 'none'
            }

        }

        const todoItems = todos.map((item) => {
            return <React.Fragment key={item.id}>
                <li style={getStyle(item)}>
                    <span >
                        <input  type="checkbox" onChange ={this.props.changeCheck.bind(this,item.id)} />
                        {item.title}
                        <button style={buttonEditStyle} onClick= {this.props.editItem.bind(this,item.id)} >Edit</button>
                        <button style={buttonStyle} onClick= {this.props.delItem.bind(this,item.id)} >X</button>
                    </span>
                </li>
            </React.Fragment>

        });

        return (
            <ul>
                {todoItems}
            </ul>
        )
    }
}

const buttonEditStyle = {
    color : 'blue',
    cursor:'pointer',
    margin: 5
}

const buttonStyle = {
    color : 'red',
    cursor:'pointer'
}


export default TodoItems
