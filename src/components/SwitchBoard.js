import React from 'react'
import Switch from './Switch'
import './SwitchBoard.css'

const CreateRow = (indexOffset, columns, litIndices, toggle) => {
    let switches = []
    for(let i=0;i<columns;i++) {
        const id = indexOffset + i
        const switchId = "switch-" + id
        switches.push((
            <Switch key={indexOffset + i} 
                    id={switchId} 
                    isOn={litIndices[id]} 
                    toggle={() => toggle(id)}
            />))
    }
    return (<div key={indexOffset}>{switches}</div>)
}

const SwitchBoard = ({rows,cols,litIndices,toggle}) => {
    let switchRows = []
    for(let i=0;i<rows;i++) {
        switchRows.push(CreateRow(i * cols, cols, litIndices, toggle))
    }
    return (<div className="SwitchBoard">{switchRows}</div>)
}

export default SwitchBoard