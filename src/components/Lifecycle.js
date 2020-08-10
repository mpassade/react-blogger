import React, { Component } from 'react'

class Lifecycle extends Component {
    state={
        list: [],
        toggle: true
    }
    handleClick = e => {
        e.preventDefault()
        const newList = [...this.state.list]
        newList.push({name: "handleclick name"})
        this.setState({
            list: newList
        })
    }
    componentDidMount(){
        console.log('componentDidMount ran')
        let newList = [{name: "mike"}]
        this.setState({
            list: newList
        })
    }
    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate ran')
        if (prevState.toggle!==this.state.toggle){
            console.log('make database call')
            const newList = [...this.state.list]
            newList.push({name: "updated name"})
            this.setState({
                list: newList
            })
        }
    }
    handleToggle = e => {
        e.preventDefault()
        console.log('toggled')
        this.setState({
            toggle: !this.state.toggle
        })
    }
    render(){
        console.log("render lifecycle ran")
        return (
            <div style={{fontSize: "3rem"}}>
                {this.state.list.length ? (
                    <div>
                        <h1>Lifecycle Component</h1>
                        <ul style={{fontSize: "2.5rem", lineHeight: "2em"}}>
                            {this.state.list.map((item, idx) => {
                                return <li key={idx}>{item.name}</li>
                            })}
                        </ul>
                        <button onClick={this.handleClick}>Name</button>
                        <button onClick={this.handleToggle}>Toggle</button>
                    </div>
                ) : (
                    <h1>Loading...</h1>
                )}
            </div>
        )
    }
}

export default  Lifecycle