/* eslint-disable max-len */
import React, { Component } from 'react';
import { fetchAllQuotes } from '../services/FuturamaApi';
import QuestionItem from './QuestionItem.js';

export default class Question extends Component {
    state = {
      all_quotes: [],
      current_questions: [],
      scores: 0
    }
doFetch = async () => {
  const allQuotes = await fetchAllQuotes();
  this.setState({ all_quotes: allQuotes });
  await this.setCurrentQuestion();
}

componentDidMount = async () => {
  await this.doFetch();
}

setCurrentQuestion = () => {
  const allQuotes = this.state.all_quotes;
  // console.log(allQuotes, 'allquotes');
  const accu = [];

  for(let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * allQuotes.length);
    const quote = this.state.all_quotes[randomIndex];
    
    accu.push(quote);
  }
  this.setState({ current_questions: accu });
}


handleAnswer = (answer, chosen, e) => {
  e.preventDefault();
  console.log(chosen, 'answer');
  if(answer === chosen) {
    this.setState({ scores: this.state.scores + 1 });
  }
}


render() {
  const { scores } = this.state.scores;
  console.log(scores, '````````````');
  return (
    <div>
      <p>{this.state.scores}</p>
      {
        this.state.current_questions.map((question, i) => <QuestionItem quote={question} key={i} event={this.handleAnswer} />)
      }
      
    </div>
  );
}
}
