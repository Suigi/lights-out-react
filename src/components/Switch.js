import React from 'react'
import './Switch.css'

const Switch = ({isOn, id}) => 
<div className="Switch">
    <input type="checkbox" checked={isOn} id={id} />
    <label htmlFor={id} />
</div>

export default Switch