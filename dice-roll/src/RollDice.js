import React, { Component } from 'react'
import Die from './Die'
import './RollDice.css'

class RollDice extends Component {
    static defaultProps = {
        side: [
            "one",
            "two",
            "three",
            "four",
            "five",
            "six"
        ]
    }

    constructor(props) {
        super(props) 
        this.state = {
            die1: "one",
            die2: "one",
            isRolling: false
        }
        this.rolldice = this.rolldice.bind(this)
    } 

    rolldice() {
        const newDice1 = this.props.side[Math.floor(Math.random() * this.props.side.length)]
        const newDice2 = this.props.side[Math.floor(Math.random() * this.props.side.length)]

        this.setState({
            die1: newDice1,
            die2: newDice2,
            isRolling: true
        })

        setTimeout(() => {
            this.setState({ isRolling: false })
        }, 1000)
    }

    render() {

        return(
            <div>
                <Die face={this.state.die1} isRolling={this.state.isRolling}/>
                <Die face={this.state.die2} isRolling={this.state.isRolling}/>
                <button disabled={this.state.isRolling} onClick={this.rolldice} >{this.state.isRolling ? "Rolling ..." : "Roll Dice !!!"}</button>
            </div>
        )
    }
}

export default RollDice