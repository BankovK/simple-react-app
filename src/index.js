import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const useState = React.useState

function Section1Unit9App() {

    const [pets, setPets] = useState([
        { name: "Meowsalot", species: "cat", age: "5", id: 123456789 },
        { name: "Barksalot", species: "dog", age: "3", id: 987654321 },
        { name: "Fluffy", species: "rabbit", age: "2", id: 123123123 },
        { name: "Purrsloud", species: "cat", age: "1", id: 456456456 },
        { name: "Paws", species: "dog", age: "6", id: 789789789 }
    ])

    return (
        <>
            <Header />
            <LikeClicker />
            <Time />
            <AddPetForm setPets={setPets}/>
            <ul>
                {pets.map(
                    pet => <Pet name={pet.name} species={pet.species} age={pet.age} key={pet.id}/>
                )}
            </ul>
            <Footer />
        </>
    )
}

function AddPetForm(props) {
    const [name, setName] = useState()
    const [species, setSpecies] = useState()
    const [age, setAge] = useState()

    function handleSubmit(e) {
        e.preventDefault()
        props.setPets( prev => prev.concat({name, species, age, id: Date.now()}) )
        setName("")
        setSpecies("")
        setAge("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
            <legend>Add New Pet</legend>
            <input value={name} onChange={ e => setName(e.target.value) } placeholder="Name" />
            <input value={species} onChange={ e => setSpecies(e.target.value) } placeholder="species" />
            <input value={age} onChange={ e => setAge(e.target.value) } placeholder="age in years" />
            <button>Add Pet</button>
            </fieldset>
        </form>
    )
}

function Header() {
    return <h1 className="special">Application Header</h1>
}

function LikeClicker() {
    const [likeCount, setLikeCount] = useState(0)

    function increaseLikeCountHandler() {
        setLikeCount( prev => prev + 1 )
    }

    function decreaseLikeCountHandler() {
        setLikeCount( prev => prev === 0 ? 0 : (prev - 1) )
    }

    return (
        <>
            <button onClick={increaseLikeCountHandler}>+</button>
            <button onClick={decreaseLikeCountHandler}>-</button>
            <h2>{likeCount} likes.</h2>
        </>
    )
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

ReactDOM.render(<Section1Unit9App />, document.getElementById('root'))