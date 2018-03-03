import React from 'react'
import {Link} from 'react-router-dom'

const linkItem = (to, text) => (
    <li><Link to={to}>{text}</Link></li>
)

export const Header = () => {
    return (
        <div>
            <h2>im the header</h2>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/page1'>Stuff</Link></li>
                <li><Link to='/login'>Log in</Link></li>
                <li><Link to='/register'>Register</Link></li>
            </ul>
        </div>
    )
}
