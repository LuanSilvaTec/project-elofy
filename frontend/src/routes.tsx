import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home/'
import CreatePerson from './pages/Person/'


const Routes = ()=>{
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={CreatePerson} path="/create-person"/>
        </BrowserRouter>
    )
}

export default Routes;