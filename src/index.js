import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

const useState = React.useState
const useEffect = React.useEffect

function Section1Unit10App() {
  const [pets, setPets] = useState([])

  useEffect(() => {
    const data = localStorage.getItem("petData")
    if (data) {
      setPets(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("petData", JSON.stringify(pets))
  }, [pets])

  return (
    <>
      <Header />
      <LikeClicker />
      <Time />
      <AddPetForm setPets={setPets} />
      <ul>
        {pets.map((pet) => (
          <Pet
            setPets={setPets}
            id={pet.id}
            name={pet.name}
            species={pet.species}
            age={pet.age}
            key={pet.id}
          />
        ))}
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
    props.setPets((prev) => prev.concat({ name, species, age, id: Date.now() }))
    setName("")
    setSpecies("")
    setAge("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add New Pet</legend>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          placeholder="species"
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="age in years"
        />
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
    setLikeCount((prev) => prev + 1)
  }

  function decreaseLikeCountHandler() {
    setLikeCount((prev) => (prev === 0 ? 0 : prev - 1))
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

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return <p>The current time is {time}.</p>
}

function Pet(props) {
  function handleDelete() {
    props.setPets((prev) => prev.filter((pet) => pet.id !== props.id))
  }

  return (
    <li>
      {props.name} is a {props.species} and is {props.age} years old.
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

function Footer() {
  return <small>Footer Text</small>
}

ReactDOM.render(<Section1Unit10App />, document.getElementById("root"))
