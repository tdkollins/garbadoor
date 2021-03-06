import React from 'react'
import Home from './Home';
import Map from './Map';
// import Camera from './camera';
import Dashboard from './Dashboard';
// import About from './about';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
    // set up routes for each application view
    <Switch>
        <Route exact path='/' component={Home}></Route>
        {/*<Route exact path='/camera' component={Camera}></Route>*/}
        <Route exact path='/dashboard' component={Dashboard}></Route>
        <Route exact path='/map' component={Map}></Route>
    </Switch>
);

export default Main;