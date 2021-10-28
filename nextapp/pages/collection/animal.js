import { useEffect, useState } from "react"
import axios from 'axios'
import { animals } from "../api/animals"
import List from "../../components/List"

const Animal = () => {
const  [animal, setAnimal] = useState("")

const sendAnimals = async (event) =>{
    event.preventDefault()
    const data = await axios.post('/api/animals', {animal})
    console.log(data)
}

const getAnimals = async () => {
    const data = await axios.get('/api/animals')
    setAnimal(data)
    
}

useEffect(() => {
    getAnimals(animal)
}, [animals])


return(
    <>
    <div>
    <form onSubmit={sendAnimals}>
    <input type="text" value={animal} onChange={(e) => setAnimal(e.target.value)}/>
    <button type="submit">Send</button>
    </form>
    <h2>Liste med dyr:</h2>
    <List list={animals}/>
    <ul>
        {animals.map((data, key) => {
            return (
                <li key={key}>{data}</li>
            )
        })}
    </ul>
    <button type="button" onClick={getAnimals}>Klikk her for listen med dyr</button>
    </div>
    </>
)
}

export default Animal