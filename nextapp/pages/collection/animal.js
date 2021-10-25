import { useEffect, useState } from "react"
import axios from 'axios'
import { animals } from "../api/animals"

const Animal = () => {
const  [animal, setAnimal] = useState("")

const sendAnimals = async (event) =>{
    event.preventDefault()
    const data = await axios.post('/api/animals', {animal})
    console.log(data)
}

const getAnimals = async () => {
    const data = await axios.get('/api/animals')
    console.log(data)
}


return(
    <>
    <div>
    <form onSubmit={sendAnimals}>
    <input type="text" value={animal} onChange={(e) => setAnimal(e.target.value)}/>
    <button type="submit">Send</button>
    </form>
    <h2>Liste med dyr:</h2>
    <ul>
        {animals.map((data, key) => {
            return(
                <li key={key}>{data.animal}</li>
        )})}
    </ul> 
    <button type="button" onClick={getAnimals}>Hei</button>
    </div>
    </>
)
}

export default Animal