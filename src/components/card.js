import React, { Component } from 'react';

import Input from './input';

class Card extends Component {

    constructor() {
        super()

        this.state = {
            color: 'BLUE',
            pluralNoun: ''
        }
    }

    handleInputChange() {
        this.setState({color: 'red' })
    }

// what you change up there in set.State changes down here
// you want to use state vs setState({}) so you don't get stuck in an infinite loop
// you can't set state inside of your constructor

    render() {
        return (
            <div className="card">
                <h1>{this.state.color}</h1>
                <input/>
            </div>
        )

        return (
            <div className="card"> 
                <h1>{this.state.color}</h1> 
                { Input('Color') }
                { Input('Plural Noun')}
            </div>
        )
    }
}

export default Card;