import React from 'react'
import { Component } from 'reflux'

import authStore from 'stores/authStore'

class RegisterPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                email: '',
                password: '',
                passwordConfirm: '',
            },
            validation: {}
        }

        this.store = authStore.store
    }

    onUpdateField = (name) => (e) => {
        let {value} = e.target
        this.setState((nextState) => {
            nextState.form[name] = value
            nextState.validation[name] = null
            return nextState
        })
    }

    onSetError = (name, errorMessage) => {
        this.setState((nextState) => {
            nextState.validation[name] = errorMessage
        })
    }

    onSubmitRegisterForm = (e) => {
        e.preventDefault()

        let nextValidation = {}
        let {email, password, passwordConfirm} = this.state.form

        if (!email.includes('@')) {
            nextValidation.email = `That doesn't look like an email address.`
        }

        if (password.length < 6) {
            nextValidation.password = `Password must be at least 6 characters.`
        }

        if (passwordConfirm !== password) {
            nextValidation.passwordConfirm = `Passwords do not match.`
        }

        if (this.hasError(nextValidation)) {
            this.setState({
                validation: nextValidation
            })
            return false
        }

        authStore.actions.register(email, password)
        return true
    }

    hasError = (validation = this.state.validation) => {
        return !Object.keys(validation).reduce((acc, curr) => acc && !validation[curr], true)
    }

    renderError = (message = null) => {
        if (message === null) {
            return null
        }

        return (
            <div className="error-container">
                <p>{message}</p>
            </div>
        )
    }

    renderErrorType = (type) => {
        let message = this.state.validation[type]
        if (!message) {
            return null
        }

        return this.renderError(message)
    }

    render = () => (
        <div>
            <form>
                <fieldset>
                    <legend>Register</legend>
                    {this.hasError() && this.renderError('Please fix the errors below.')}
                    {this.renderError(this.state.error)}

                    <p>
                        <label htmlFor="email">Email Address</label><br/>
                        <input name="email" type="text" placeholder="someone@example.com" onChange={this.onUpdateField('email')}/>
                    </p>
                    {this.renderErrorType('email')}

                    <p>
                        <label htmlFor="password">Password</label><br/>
                        <input name="password" type="password" placeholder="Enter Password" onChange={this.onUpdateField('password')}/>
                    </p>
                    {this.renderErrorType('password')}

                    <p>
                        <label htmlFor="password_confirm">Confirm Password</label><br/>
                        <input name="password_confirm" type="password" placeholder="Confirm Password" onChange={this.onUpdateField('passwordConfirm')}/>
                    </p>
                    {this.renderErrorType('passwordConfirm')}

                    <p>
                        <button onClick={this.onSubmitRegisterForm}>
                            Register
                        </button>                        
                    </p>
                </fieldset>
            </form>
        </div>
    )
}

module.exports = {
    RegisterPage
}
