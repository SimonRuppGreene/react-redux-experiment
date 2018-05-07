import React from 'react'
import { Component } from 'reflux'
import { AuthStore } from 'stores/authStore'

import { LoginPage } from './LoginPage'
import { RegisterPage } from './RegisterPage'

const routeMap = {
    '/login': (props) => <LoginPage {...props} />,
    '/register': (props) => <RegisterPage {...props} />,
    default: (props) => <LoginPage {...props} />
}

class AuthContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.store = AuthStore
    }

    getPath = () => this.props.location.pathname

    getComponentToRender = () => {
        return routeMap[this.getPath() || 'default']({history: this.props.history})
    }

    render = () => {
        return this.getComponentToRender()
    }
}

module.exports = {
    AuthContainer
}
