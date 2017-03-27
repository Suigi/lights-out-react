import React from 'react'

const Switch = ({isOn}) => 
<div className="switch">
    <input type="checkbox" checked={isOn} />
</div>

export default Switch