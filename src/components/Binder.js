import React, {Component} from 'react'

class Binder extends Component {
    constructor(){
        super()
        this.state={
            text: ''
        }
    }
    handleClickMe = () => {
        this.setState({
            text: this.state.text ? '' : 'I can see you now'
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.text}</h1>
                <button 
                    className='ui primary button'
                    style={{margin: '10px 15px'}}
                    onClick={this.handleClickMe}
                >
                    Delete
                </button>
            </div>
        )
    }
}

export default Binder