import React, { Component } from 'react'
import './Die.css'

class Die extends Component {
    render() {
        return(
            <div>
                <i className={`fas fa-dice-${this.props.face} dice ${ this.props.isRolling ? "dice animated shake" : "" }`} />
            </div>
        )
    }
}

export default Die