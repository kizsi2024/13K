import React from "react";
import './Person.css'

const szemely=(props)=>{
    return(
        <div className="Persons">
            <p onClick={props.click}>Nevem: {props.name}, korom: {props.age}</p>
            <input type="text" onChange={props.change} value={props.name}/>
            <input type="button" onClick={props.delete} value={'töröl'}></input>
        </div>
    )
    
}

export default szemely