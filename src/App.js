import React, { Component } from 'react';
import SearchBar from './Components/SearchBar'
import './scss/main.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
