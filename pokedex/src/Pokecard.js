import React, { Component } from "react";
import './Pokecard.css'

// const POKE_IMG = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

const POKE_IMG = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3): num);

class Pokecard extends Component {
    render() {
        let imgSrc = `${POKE_IMG}${padToThree(this.props.id)}.png`
        return (
            <div className="Pokecard">
                <h1>{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name} />
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">EXP: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;