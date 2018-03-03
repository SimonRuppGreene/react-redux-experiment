import firebase from 'firebase'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, HashRouter } from 'react-router-dom'

import { firebaseConfig } from './constants/firebaseConfig.js'

import { App } from './containers/App'
require('./styles/global.scss')

const routedApp = (
    <HashRouter>
        <App />
    </HashRouter>	
)

// initialize firebase
firebase.initializeApp(firebaseConfig)

// initial render of app
ReactDOM.render(routedApp, document.getElementById('app-root'))
