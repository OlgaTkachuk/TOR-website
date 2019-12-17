import React, {createContext} from 'react';
import * as ReactDOM from "react-dom";


const LanguageContext = createContext({
    lang: '',
    updateLanguage: () => {
    },
});

export class LanguageProvider extends React.Component {

    updateLanguage = newLang => {
        this.setState({lang: newLang});
    };

    state = {
        lang: (navigator.languages.includes("uk-UA") || navigator.languages.includes("ru-UA") || navigator.languages.includes("uk")) ? "ua" : "en",
        updateLanguage: this.updateLanguage,
    };

    render() {
        return (
            <LanguageContext.Provider value={this.state}>
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}

export const LanguageConsumer = LanguageContext.Consumer;
