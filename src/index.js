import React from 'react';
import ReactDOM from 'react-dom';

function Section1Unit2App() {
    return React.createElement("div", null, [
        React.createElement("h1", null, "Application Header"),
        React.createElement("p", null, `The current time is ${new Date().toLocaleString()}.`),
        React.createElement("small", null, "Footer Text"),
    ])
}

setInterval(() => {
    ReactDOM.render(React.createElement(Section1Unit2App), document.getElementById('root'))
}, 1000);