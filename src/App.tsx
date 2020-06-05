import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './about';
import ProjectList from './project/list';
import ProjectView from './project/view';
import Contact from './contact';
import Main from './main';
import Error from './error';

const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/about" component={About}/>
                <Route exact path="/project" component={ProjectList}/>
                <Route exact path="/project/:id" component={ProjectView}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/" component={Main}/>
                <Route component={Error}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;