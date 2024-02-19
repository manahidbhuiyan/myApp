import React from 'react';
import ClickCounter from './component/ClickCounter';
import Counter from './component/Counter';
import HoverCounter from './component/HoverCounter';
import Section from './component/Section'
import ThemeContext from './context/themeContext'

export default class App extends React.Component {
    state = {
        theme : 'dark'
    }

    render(){
        const { theme } = this.state
        console.log("theme app",theme)
        return (
            <div className="app">
                <Counter>
                    {(counter, incrementCount) => (
                        <ClickCounter count={counter} incrementCount={incrementCount} />
                    )}
                </Counter>
                <Counter>
                    {(counter, incrementCount) => (
                        <HoverCounter count={counter} incrementCount={incrementCount} />
                    )}
                </Counter>

                <ThemeContext.Provider value={{ theme: theme }}> <Section /> </ThemeContext.Provider>

                
            </div>
        );
    }
}


