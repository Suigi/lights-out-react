import React from 'react'
import SwitchBoard from './SwitchBoard'

const PlayableSwitchBoard = React.createClass({
    getInitialState : function() {
        return {
            litIndices: {
            0:true,6:true,12:true,18:true,24:true
            }
        }
    },

    toggle : function(id) {
        console.log("Toggled", id)
        this.setState((oldState) => {
            let lit = oldState.litIndices
            lit[id] = !lit[id]
            lit[id-1] = !lit[id-1]
            lit[id+1] = !lit[id+1]
            return {
                litIndices: lit
            }
        })
    },

    render : function() {
        return (<SwitchBoard cols={5} rows={5} 
            litIndices={this.state.litIndices} 
            toggle={this.toggle} />)
    }
})

export default PlayableSwitchBoard