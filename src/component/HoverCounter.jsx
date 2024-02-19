import React from 'react';

export default function HoverCounter({ count, incrementCount, theme }) {
    console.log("count",count)
    console.log("theme",theme)
    const style = theme === 'dark' ? { backgroundColor: '#000000', color: '#fff' } : null
    return (
        <div>
            <h1 onMouseOver={incrementCount} style={style}>Hovered {count} times</h1>
        </div>
    );
}
