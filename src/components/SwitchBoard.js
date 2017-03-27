import React from 'react'
import Switch from './Switch'

const CreateRow = (indexOffset, columns) => {
    let switches = []
    for(let i=0;i<columns;i++) {
        switches.push((<Switch key={indexOffset + i} />))
    }
    return (<div key={indexOffset}>{switches}</div>)
}

const SwitchBoard = ({rows,cols}) => {
    let switchRows = []
    for(let i=0;i<rows;i++) {
        switchRows.push(CreateRow(i * cols, cols))
    }
    return (<div>{switchRows}</div>)
}

export default SwitchBoard