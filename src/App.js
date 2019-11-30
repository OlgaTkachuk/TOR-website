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
import {LanguageConsumer, LanguageProvider} from "./Components/LanguageContext";
import {Helmet} from 'react-helmet';
class App extends Component {

    render() {
        return (
                <LanguageProvider>
                    <LanguageConsumer>
                        {({lang = ''}) => (
                            <div className={lang == "en" ? "latin-font" : "cyrillic-font"}>
                                <Helmet title={lang == "en" ? "TOR Glass | Blown glass producer": "TOR Glass | Вироби зі скла"}
                                    meta name="description" content={lang == "en" ? "Producer of glass artistic items and also technical colored glass. We specialize on art glassware in a wide range of shapes, designs, colours and sixes." : "Виробник скляних художніх предметів, а також технічного кольорового скла. Ми спеціалізуємось на художньому скляному посуді в широкому діапазоні форм, дизайну, кольорів та розмірів"}/>
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
                            </div>)}
                    </LanguageConsumer>
                </LanguageProvider>
        );
    }
}

export default App;
