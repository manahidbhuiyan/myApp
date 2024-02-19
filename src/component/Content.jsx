import ThemeContext from '../context/themeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

export default function Content() {

    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(counter, incrementCount) => {
                      <ThemeContext.Consumer> {({theme}) => (
                        <HoverCounter
                        count={counter}
                        incrementCount={incrementCount}
                        theme={theme}
                    />
                      )}
                     </ThemeContext.Consumer>
                }}
            </Counter>
        </div>
    );
}
