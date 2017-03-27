import React from 'react'
import './Switch.css'

const Switch = ({isOn, id, toggle}) => 
<div className="Switch">
    <input type="checkbox" checked={isOn} id={id} onChange={toggle} />
    <label htmlFor={id} />
</div>

export default Switch