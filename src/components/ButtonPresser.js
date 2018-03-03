import React, { Component } from 'react'

export class ButtonPresser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clicks: 0
        }
    }

    onClick = () => {
        this.setState({clicks: this.state.clicks + 1})
    }

    render () {
        return (
            <div>
                <p>
                    Press the button. You pressed it: {this.state.clicks} times.
                </p>
                <button onClick={this.onClick}>
                    Click me.
                </button>
            </div>
        )
    }
}

