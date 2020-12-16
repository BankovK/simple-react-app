import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const useState = React.useState

const pets = [
    { name: "Meowsalot", species: "cat", age: "5", id: 123456789 },
    { name: "Barksalot", species: "dog", age: "3", id: 987654321 },
    { name: "Fluffy", species: "rabbit", age: "2", id: 123123123 },
    { name: "Purrsloud", species: "cat", age: "1", id: 456456456 },
    { name: "Paws", species: "dog", age: "6", id: 789789789 }
]

function Section1Unit7App() {
    return (
        <>
            <Header />
            <Time />
            <ul>
                {pets.map(
                    pet => <Pet name={pet.name} species={pet.species} age={pet.age} key={pet.id}/>
                )}
            </ul>
            <Footer />
        </>
    )
}

function Header() {
    return <h1 className="special">Application Header</h1>
}

function Time() {
    const [time, setTime] = useState(new Date().toLocaleString())

    setTimeout(
        () => setTime(new Date().toLocaleString()),
        1000
    )

    return <p>The current time is {time}.</p>
}

function Pet(props) {
    return <li>{props.name} is a {props.species} and is {props.age} years old.</li>
}

function Footer() {
    return <small>Footer Text</small>
}

ReactDOM.render(<Section1Unit7App />, document.getElementById('root'))