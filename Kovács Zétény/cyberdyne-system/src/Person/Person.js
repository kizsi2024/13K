import React from "react"
import './Person.css'

const szemely = (props) => {
    return (
        <div className="Person">
        <p onClick={props.click}>Nevem:{props.name}, korom: {props.age}</p>
        <input type="text" onChange={props.change} value={props.name0}></input>
        <input type="button" onClick={props.delete} value='Töröl' />
    </div>
    ) 
};

export default szemely;