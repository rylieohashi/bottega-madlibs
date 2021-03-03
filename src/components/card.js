import React, { Component } from 'react';

import Input from './input';

class Card extends Component {

    constructor() {
        super()

        this.state = {
            color: '',
            pluralNoun: ''
        }
// we're taking our function and binding it to the instance in our class
        this.handleInputChange = this.handleInputChange.bind(this);
    }

//this is two-way binding and will show what you type in the input. changing the value of state.    
    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value })
        console.log(this.state);
        }

// what you change up there in set.State changes down here
// you want to use state vs setState({}) so you don't get stuck in an infinite loop
// you can't set state inside of your constructor

//need to turn event to arrow function
//we deleted the arrow function because there's a better syntax
    render() {
        return (
            <div className="card"> 
                <h1>{this.state.color}</h1> 
                { Input('Color', this.state.color, this.handleInputChange, 'color') }
                { Input('Plural Noun', this.state.pluralNoun, this.handleInputChange, 'pluralNoun')}
            </div>
        )
    }
}

export default Card;