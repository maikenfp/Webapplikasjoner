import { useEffect } from "react"

const List = ({list}) => {

    useEffect(() => {
        if(list){
            list.map((data, key) => {
                return(
                    <li key={key}>{data.animal}</li>
            )})
        }
    },[list])

    return(
        <>
        <div>
        <ul>
        {list.map((data, key) => {
            return(
                <li key={key}>{data.animal}</li>
        )})}
        </ul>
        </div>
        </>
    )
}

export default List