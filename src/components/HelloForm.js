import React, { Component } from 'react'
import { HelloSayer } from './HelloSayer'

class HelloForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'world'
        }
    }

    onChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    render () {
        return (
            <div className="hello-form">
                <h4>Tell me your name.</h4>
                <input type="text" onChange={this.onChange} />
                <HelloSayer name={this.state.name} />
            </div>
        )
    }
}

module.exports = {
    HelloForm
}
