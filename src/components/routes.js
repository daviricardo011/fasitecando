import React from 'react';
import { Router } from 'react-router';
import { BrowserRouter, Switch, Route  } from 'react-router-dom'
import {history} from '../history';
import PrivateRoute from './PrivateRoute';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Home from '../pages/Home';
import outraPag from './outraPag';

const Routes = () => (
    <BrowserRouter>
            <Switch>
                <Route component={Login} exact path="/"/>
                <Route component={Cadastro} exact path="/cadastro" />
                <PrivateRoute component={Home} exact path="/home" />
                <PrivateRoute component={outraPag}/>
            </Switch>

    </BrowserRouter>
);

export default Routes;