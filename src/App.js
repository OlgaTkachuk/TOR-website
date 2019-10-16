import React, {Component} from 'react';
import './App.css';

import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import CustomMade from './pages/CustomMade'
import WhatsNew from './pages/WhatsNew'
import Catalog from './pages/Catalog'
import Collection from './pages/Collection'
import InDevelopment from './pages/InDevelopment'
import Navbar from "./Components/Navbar";
import Error from "./pages/Error";

import {Route, Switch} from 'react-router-dom'
import {LanguageProvider} from "./Components/LanguageContext";

class App extends Component {

    render() {
        return (
            <LanguageProvider>
                <div>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/catalog" component={Catalog}/>
                        <Route exact path="/collection/:slug" component={Collection}/>
                        <Route exact path="/custom" component={CustomMade}/>
                        <Route exact path="/news" component={WhatsNew}/>
                        <Route exact path="/contacts" component={Contacts}/>
                        <Route exact path="/dev" component={InDevelopment}/>
                        <Route component={Error}/>
                    </Switch>
                </div>
            </LanguageProvider>
        );
    }
}

export default App;
