import firebase from 'firebase'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, HashRouter } from 'react-router-dom'

import { firebaseConfig } from './constants/firebaseConfig.js'

require('./styles/global.scss')

import { RoutedApp } from './routedApp'

// initialize firebase
firebase.initializeApp(firebaseConfig)

// initial render of app
ReactDOM.render(RoutedApp, document.getElementById('app-root'))
