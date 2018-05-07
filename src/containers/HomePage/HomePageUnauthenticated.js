import React from 'react'

import {HelloForm} from 'components/HelloForm'
import {ButtonPresser} from 'components/ButtonPresser'

export const HomePageUnauthenticated = (props) => {
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
