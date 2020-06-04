import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './about';
import Contact from './contact';

const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                {/*<Route path="/work/:id" component={}/>
                <Route exact path="/" component={}/>
                <Route component={}/>*/}
            </Switch>
        </BrowserRouter>
    );
};

export default App;