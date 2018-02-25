import React from 'react'
import { routes } from './routes'
import { Switch, Route } from 'react-router-dom'
const cn = require('classnames/bind').bind(require('./main.scss'))

export const Main = () => 
    <div>
        <Switch>
            {routes.map((item, index) => <Route exact={item.exact} key={index} path={item.path} component={item.component}/>)}
        </Switch>
    </div>