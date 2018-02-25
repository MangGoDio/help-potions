import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from './routes'
const cn = require('classnames/bind').bind(require('./nav.scss'))

export const Nav = () => 
    <nav className={cn('left')}>
        <ul>
            {routes.map((item, index) => <li key={index}><Link to={item.path}>{item.name}</Link></li>)}
        </ul>
    </nav>