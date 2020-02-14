import React, { Component } from 'react'

export class AddTodo extends Component {


    constructor(props) {
        super(props);
        this.initialState = {
            title: '',
            id :'',
            completed: false
        }
        if (props.itemEdit) {
            this.state = props.itemEdit
        } else {
            this.state = this.initialState;
        }
    }

    onInputChangeHandle = (e) => {
        const newTitle = e.target.value;
        this.setState({
            title: newTitle
        })
    }

    submitForm =()=>{
            this.props.saveChangeItem(this.state)

            this.setState(this.initialState)
    }


    render() {
        let form;
    
            form = <div>
                <input type="text" value={this.state.title} style={inputStyle} placeholder="Input the title!" onChange={this.onInputChangeHandle} />
                <input type="submit" style={buttonStyle} value='Save' onClick={this.submitForm} />
           
            </div>

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

// const buttonCacelStyle = {
//     background: '#0FF',
//     color: '#FFF',
//     padding: 5,
//     cursor: 'pointer'
// }


export default AddTodo
