import React, { Component } from 'react';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

class App extends Component {
  render() {
    return (
      <div>
        <IndecisionApp/>
      </div>
    )
  }
}

export default App;