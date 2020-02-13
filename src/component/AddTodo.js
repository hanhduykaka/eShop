import React, { Component } from 'react'

export class AddTodo extends Component {


    state = {
        title: "",
        edit: false
    }

    onInputChangeHandle = (e) => {
        const newTitle = e.target.value;
        this.setState({
            title: newTitle
        })
    }

    render() {
        let form;
        if (this.props.isEdit) {
            form = <div>
                <input type="text" value={this.props.itemEdit.title || ""} style={inputStyle} placeholder="Input the title!" onChange={this.onInputChangeHandle} />
                <input type="submit" style={buttonStyle} value='Update' onClick={this.props.addItem.bind(this, this.state.title)} />
                <input type="submit" style={buttonCacelStyle} value='Cacel' onClick={this.props.cancelEdit.bind(this)} />
            </div>

        } else {

            form = <div>
                <input type="text" style={inputStyle} placeholder="Input the title!" onChange={this.onInputChangeHandle} />
                <input type="submit" style={buttonStyle} value='Add' onClick={this.props.addItem.bind(this, this.state.title)} />
            </div>
        }

        return (
            form
        )
    }
}


const inputStyle = {
    padding: 5,
    margin: '5px 0'
}
const buttonStyle = {
    background: '#0F0',
    color: '#FFF',
    padding: 5,
    cursor: 'pointer'
}

const buttonCacelStyle = {
    background: '#0FF',
    color: '#FFF',
    padding: 5,
    cursor: 'pointer'
}


export default AddTodo
