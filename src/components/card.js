import React, { Component } from 'react';

import Input from './input';

class Card extends Component {

    constructor() {
        super()

        this.state = {
            color: 'BLUE',
            pluralNoun: ''
        }
// we're taking our function and binding it to the instance in our class
        this.handleInputChange = this.handleInputChange.bind(this);
    }

//this is two-way binding and will show what you type in the input. changing the value of state.    
    handleInputChange(event) {
        this.setState({color: event.target.value })
    }

// what you change up there in set.State changes down here
// you want to use state vs setState({}) so you don't get stuck in an infinite loop
// you can't set state inside of your constructor

//need to turn event to arrow function
    render() {
        return (
            <div className="card">
                <h1>{this.state.color}</h1>
                <input onChange={(event) => this.handleInputChange(event)}/>
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