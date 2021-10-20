import React from "react"
import './card.styles.css'

const Card = (props) => {
    return (
        <div className="card-container">
            <img alt="{props.monster.name}" src={`https://robohash.org/${props.monster.name}?set=set2&size=180x180`} />
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}

export default Card;