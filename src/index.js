import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Section1Unit5App() {
    return (
        <>
            <Header />
            <Time />
            <ul>
                <Pet name="Fluffy" species="dog" age="3"/>
                <Pet name="Cutter" species="cat" age="1"/>
                <Pet name="Yago" species="parrot" age="10"/>
            </ul>
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

function Pet(props) {
    return <li>{props.name} is a {props.species} and is {props.age} years old.</li>
}

function Footer() {
    return <small>Footer Text</small>
}

setInterval(() => {
    ReactDOM.render(<Section1Unit5App />, document.getElementById('root'))
}, 1000);