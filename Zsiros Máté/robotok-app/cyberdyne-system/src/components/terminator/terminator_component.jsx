import React from 'react'

const Terminator = ({id, name, sn}) => {
    return(
        <div className="bg-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?&size=180x180`} alt="terminator" />
            <h2>{name}</h2>
            <p>SN: {sn}</p>
        </div>
    )
}

export default Terminator;