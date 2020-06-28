import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ScrollToTop from "./component/scrollToTop";
import About from './about';
import ProjectList from './project/list';
import ProjectView from './project/view';
import Contact from './contact';
import Main from './main';
import Error from './error';
import Header from "./component/header";
import Footer from "./component/footer";

const App = () => {
    return(
        <BrowserRouter>
            <ScrollToTop/>
            <Header/>
            <div id="container">
                <Switch>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/project" component={ProjectList}/>
                    <Route exact path="/project/:id" component={ProjectView}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/" component={Main}/>
                    <Route component={Error}/>
                </Switch>
            </div>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;