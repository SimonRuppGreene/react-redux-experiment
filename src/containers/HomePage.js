import firebase from 'firebase'
import React, { Component } from 'react'

import {HelloForm} from '../components/HelloForm'
import {ButtonPresser} from '../components/ButtonPresser'

export class HomePage extends Component {
    constructor(props) {
        super(props)

        // if firebase auth, do action for logging in or something
        console.log('homepage auth')
        console.log(firebase.auth())
    }

    render () {
        return (
            <div>
                <p>
                    Welcome to the app.
                </p>
                <HelloForm />
                <ButtonPresser />
            </div>
        )
    }
}
