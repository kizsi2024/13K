import React from "react";

const szemely = (props)=>{
    return(
        <div>
        <p>nevem:{props.name}, korom:{props.age}</p>
        <p>{props.children}</p>
    </div>
    )
    
    
}

export default szemely;