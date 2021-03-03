import React, { Component } from 'react';
import Content from './content';

import Input from './input';

class Card extends Component {

    constructor() {
        super()

        this.state = {
            color: '',
            pluralNoun: '',
            adjectiveOne: '',
            celebOne: '',

            adjectiveTwo: '',
            nounOne: '',
            numberOne: '',
            numberTwo: '',
            
            nounTwo: '',
            adjectiveThree: '',
            celebTwo: '',
            celebThree: '',

            adjectiveFour: '',
            nounThree: '',
            celebFour: '',
            adjectiveFive: ''
        }
// we're taking our function and binding it to the instance in our class
        this.handleInputChange = this.handleInputChange.bind(this);
    }

//this is two-way binding and will show what you type in the input. changing the value of state.    
    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value })
        }

// what you change up there in set.State changes down here
// you want to use state vs setState({}) so you don't get stuck in an infinite loop
// you can't set state inside of your constructor

//need to turn event to arrow function
//we deleted the arrow function because there's a better syntax
    render() {

        const inputData = [
            {title: 'Color', state: this.state.color, name: 'color'},
            {title: 'Plural Noun', state: this.state.pluralNoun, name: 'pluralNoun'},
            {title: 'Adjective', state: this.state.adjectiveOne, name: 'adjectiveOne'},
            {title: 'Celebrity', state: this.state.celebOne, name: 'celebOne'},
            
            {title: 'Adjective', state: this.state.adjectiveTwo, name: 'adjectiveTwo'},
            {title: 'Noun', state: this.state.nounOne, name: 'nounOne'},
            {title: 'Number', state: this.state.numberOne, name: 'numberOne'},
            {title: 'Number', state: this.state.numberTwo, name: 'numberTwo'},

            {title: 'Noun', state: this.state.nounTwo, name: 'nounTwo'},
            {title: 'Adjective', state: this.state.adjectiveThree, name: 'adjectiveThree'},
            {title: 'Celebrity', state: this.state.celebTwo, name: 'celebTwo'},
            {title: 'Celebrity', state: this.state.celebThree, name: 'celebThree'},

            {title: 'Adjective', state: this.state.adjectiveFour, name: 'adjectiveFour'},
            {title: 'Noun', state: this.state.nounThree, name: 'nounThree'},
            {title: 'Celebrity', state: this.state.celebFour, name: 'celebFour'},
            {title: 'Adjective', state: this.state.adjectiveFive, name: 'adjectiveFive'}
        ]

        return (
            <div className="card"> 
                {
                    inputData.map(data => Input( (data), this.handleInputChange ))
                }
                <Content data={this.state}/>
            </div>
        )
    }
}

export default Card;