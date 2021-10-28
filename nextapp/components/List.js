

const List = ({list}) => {

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