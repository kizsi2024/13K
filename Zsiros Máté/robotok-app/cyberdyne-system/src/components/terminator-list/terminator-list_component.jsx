import React from 'react'
import Terminator from '../terminator/terminator_component'

const TerminatorList = ({models}) => {
    return(
        <div>
            {models.map((model) => {
                return(
                    <Terminator key={model.id}
                    id={model.id}
                    name={model.name}
                    sn={model.phone}
                    />
                )
            })}
        </div>
    )
}

export default TerminatorList;