import firebase from 'firebase'
import React from 'react'
import {Component} from 'reflux'

import AuthStore from 'stores/authStore'

import {HomePageUnauthenticated} from './HomePageUnauthenticated'
import {HomePageAuthenticated} from './HomePageAuthenticated'

export class HomePage extends Component {
    constructor(props) {
        super(props)

        // if firebase auth, do action for logging in or something
        console.log('homepage auth')
        console.log(firebase.auth())

        this.store = AuthStore.store
    }

    render = () => this.state.authenticated ? <HomePageAuthenticated/> : <HomePageUnauthenticated/>
}
