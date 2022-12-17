import React, { Component } from 'react';
import { render } from 'react-dom';
import Board from './components/Board.jsx';

class App extends Component {
  render() {
    return (
      <div className='AppDiv'>
        <h1>Tic Tac Toe</h1>
        <Board />
      </div>
    );
  }
}

render(<App />, document.querySelector('#root'));
