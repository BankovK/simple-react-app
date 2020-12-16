import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Section1Unit3App() {
    return (
        <>
            <h1 className="special">Application Header</h1>
            <p>The current time is {new Date().toLocaleString()}.</p>
            <small>Footer Text</small>
        </>
    )
}

setInterval(() => {
    ReactDOM.render(<Section1Unit3App />, document.getElementById('root'))
}, 1000);