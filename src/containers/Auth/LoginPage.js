import React from 'react'
import { Component } from 'reflux'

import authStore from 'stores/authStore'

export class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }

        this.store = authStore.store
    }

    onLogin = (e) => {
        e.preventDefault()
        console.log(`logging in with email ${this.state.email}, password ${this.state.password}`)
        authStore.actions.login(this.state.email, this.state.password)
        return false
    }

    onChangeField = (fieldName) => {
        return (e) => {
            this.setState({
                [fieldName]: e.target.value
            })
        }
    }

    renderError = () => {
        const message = this.state.error

        if (!message) {
            return null
        }

        return (
            <div className="error-container">
                <p>{message}</p>
            </div>
        )
    }

    renderLoading = () => {
        if (this.state.loading) {
            return <p>Loading...</p>
        }

        return null
    }

    render () {
        return (
            <div>
                <form>
                    <fieldset>
                        <legend>
                            Log In
                        </legend>
                    
                        {this.renderError()}
                        {this.renderLoading()}

                        <p>
                            <label htmlFor="email">Email</label>
                            <input name="email" type="text" placeholder="email" onChange={this.onChangeField('email')} />
                        </p>
                        <p>
                            <label htmlFor="password">Password</label>
                            <input name="password" type="password" placeholder="password" onChange={this.onChangeField('password')}/>
                        </p>
                        
                        <p>
                            <button onClick={this.onLogin}>
                                Login
                            </button>
                        </p>

                    </fieldset>
                </form>

            </div>
        )
    }
}
