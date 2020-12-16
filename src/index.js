import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Section1Unit4App() {
    return (
        <>
            <Header />
            <Time />
            <Footer />
        </>
    )
}

function Header() {
    return <h1 className="special">Application Header</h1>
}

function Time() {
    return <p>The current time is {new Date().toLocaleString()}.</p>
}

function Footer() {
    return <small>Footer Text</small>
}

setInterval(() => {
    ReactDOM.render(<Section1Unit4App />, document.getElementById('root'))
}, 1000);