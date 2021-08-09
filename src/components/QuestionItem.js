/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Question from './Question';

export default class QuestionItem extends Component {
  state = {
    value: ''
  }

  render() {
    const answer = this.props.quote.name;
    const characters = [
      'Bender',
      'Fry',
      'Leela',
      'Professor Farnsworth',
      'Amy',
      'Zapp Brannigan',
      'Lurr',
      'Dr Zoidberg',
      'Linda the reporter',
      'Bob Barker',
      'Hermes',
      'Morgan Proctor',
      'Mom',
      'Robot Mob',
      'Giant Bender',
      'Kif',
      'Don bot'
    ];
   
    const handleChange = event => {
      console.log(event.target.value, 'event target value');
      this.setState({
        value: event.target.value
      });
    };

    console.log(this.props, 'this.props');
    // console.log(event.target.characters, '========');
    return (
      <label>
        <div>
          <h2>Who said: {this.props.quote.text}</h2>   
        </div>
        <form onSubmit={(e) => this.props.event(answer, this.state.value, e)}>
          Characters
          <label>
            <select onChange={handleChange}>
              {
                characters.map((character, i) => <option id={character} value={character} key={i}>{character}</option>)
              }
            </select>
          </label>
          <button>Submit</button>
        </form>
      </label>
    );
  }
}
