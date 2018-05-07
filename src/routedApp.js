import React from 'react'
import {Switch, Route, BrowserRouter, HashRouter} from 'react-router-dom'

import {Header} from 'components/Header'

import {HomePage} from 'containers/HomePage'
import {OtherPage} from 'containers/OtherPage'
import {AuthContainer} from 'containers/Auth'

const App = (props) => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/page1" component={OtherPage}/>
                <Route path="/login" component={AuthContainer}/>
                <Route path="/register" component={AuthContainer}/>
            </Switch>
        </div>
    )
}

export const RoutedApp = (
    <HashRouter>
        <App />
    </HashRouter>
)
