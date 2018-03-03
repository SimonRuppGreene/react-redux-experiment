import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Header} from '../components/Header'

import {HomePage} from './HomePage'
import {OtherPage} from './OtherPage'
import {AuthContainer} from './Auth'

export const App = () => {
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
