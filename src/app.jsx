import React, { Component } from 'react';
import { render } from 'react-dom';
import Box from './components/Box.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <Box letter='x' />
      </div>
    );
  }
}

render(<App />, document.querySelector('#root'));
