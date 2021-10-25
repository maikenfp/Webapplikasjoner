import { useState } from "react"
import axios from 'axios'

const Animal = () => {
const  [animal, setAnimal] = useState("")

const sendAnimals = async (event) =>{
    event.preventDefault()
    const data = await axios.post('/api/animals', {animal})
    console.log(data)
}

const getAnimals = async (event) => {
    event.preventDefault()
    const data = await axios.get('/api/animals')
    console.log(data)
}

return(
    <>
    <form onSubmit={sendAnimals}>
    <input type="text" value={animal} onChange={(e) => setAnimal(e.target.value)}/>
    <button type="submit">Send</button>
    </form>
    <button type="button" onClick={getAnimals}>Klikk meg</button>
    <ul>
        <li></li>
    </ul>
    </>
)
}

export default Animal