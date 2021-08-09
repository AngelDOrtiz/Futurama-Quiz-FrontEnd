/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class QuestionItem extends Component {
  render() {
    const answer = this.props.quote.character;
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
    return (
      <label>
        <div>
          <h2>Who said: {this.props.quote.text}</h2>   
        </div>
        <form onSubmit={() => this.props.event(answer, this.target.value)}>
          Characters
          <label>
            <select>
              {
                characters.map((character, i) => <option value={character} key={i}>{character}</option>)
              }
            </select>
          </label>
          <button>Submit</button>
        </form>
      </label>
    );
  }
}
