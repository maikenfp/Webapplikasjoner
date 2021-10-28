import { useEffect, useState } from "react"
import axios from 'axios'
import { animals } from "../api/animals"
import List from "../../components/List"

const Animal = () => {
const  [animal, setAnimal] = useState("")

const sendAnimals = async (event) =>{
    event.preventDefault()
    const data = await axios.post('/api/animals', {animal})
    setAnimal(data)
    console.log(data)
}

const getAnimals = async () => {
    const data = await axios.get('/api/animals', {animals})
    console.log(data)
}

return(
    <>
    <form onSubmit={sendAnimals}>
    <input type="text" value={animal} onChange={(e) => setAnimal(e.target.value)}/>
    <button type="submit">Send</button>
    </form>
    <h2>Liste med dyr:</h2>
    <button type="button" onClick={getAnimals}>Klikk her for listen med dyr</button>
    <List list={animals}/>
    </>
)
}

export default Animal