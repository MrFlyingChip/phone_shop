import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './containers/App'
import Phones from './containers/Phones'
import Cart from './containers/Cart'

export const routes = (
    <div>
        <Route path='/' component={App}>
            <Route path='/phones' component={Phones}/>
            <Route path='/cart' component={Cart}/>
        </Route>
    </div>
);