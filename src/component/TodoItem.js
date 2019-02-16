import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: "#ff0",
            textDecoration: this.props.todo.completed
                ? "line-through"
                : "none"
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <p>
                    {this.props.todo.title}</p>
            </div>
        )
    }

}
//protype

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
