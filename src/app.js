import React from 'react'
import ReactDOM from 'react-dom'
import { Nav } from './content/nav'
import { Main } from './content/Main'
import { HashRouter } from 'react-router-dom'
import './reset.scss'
import './prism.scss'
const cn = require('classnames/bind').bind(require('./app.scss'))

const App = () => 
    <div className={cn('flex')}>
        <Nav />
        <Main />
    </div>

ReactDOM.render((
    <HashRouter>
        <App />
    </HashRouter>
), document.getElementById('app'))