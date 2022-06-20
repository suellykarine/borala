

function CardEvent ({ date, city, name, state }) {

    return(
    <div>

        <h3>{name}</h3>
        <div>
            <h4>{city} - {state}</h4>
            <h5>{date}</h5>
        </div>

    </div>
    )

}

export default CardEvent