import React from "react"

const szemely = (props) => {
    return  <div>
        <p onClick={props.click}>Nevem:{props.name}, korom: {props.age}</p>
        <input type="text" onChange={props.change} value={props.name}></input>
    </div>
};

export default szemely;