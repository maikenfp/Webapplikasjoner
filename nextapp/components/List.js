
const List = ({list}) => {

    return(
        <>
        <ul>
        {list.map((data, key) => {
            return(
                <li key={key}>{data.animal}</li>
        )})}
        </ul>
        </>
    )
}

export default List