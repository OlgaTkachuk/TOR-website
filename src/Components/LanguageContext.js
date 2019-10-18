import React, { createContext } from 'react';

const LanguageContext = createContext({
    lang: '',
    updateLanguage: () => {},
});

export class LanguageProvider extends React.Component {
    updateLanguage = newLang => {
        this.setState({ lang: newLang });
    };
    state = {
        lang: 'english',
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
