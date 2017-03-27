import React from 'react'
import Switch from './Switch'
import './SwitchBoard.css'

const CreateRow = (indexOffset, columns) => {
    let switches = []
    for(let i=0;i<columns;i++) {
        const id = indexOffset + i
        const switchId = "switch-" + id
        switches.push((<Switch key={indexOffset + i} id={switchId} />))
    }
    return (<div key={indexOffset}>{switches}</div>)
}

const SwitchBoard = ({rows,cols}) => {
    let switchRows = []
    for(let i=0;i<rows;i++) {
        switchRows.push(CreateRow(i * cols, cols))
    }
    return (<div className="SwitchBoard">{switchRows}</div>)
}

export default SwitchBoard