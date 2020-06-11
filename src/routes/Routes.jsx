import { Route } from 'react-router-dom';
import React from 'react';
import About from "../components/about/About";
import Home from '../components/home/Home';

const Routes = () => {
    return (
        <>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
        </>
    )
}

export default Routes;