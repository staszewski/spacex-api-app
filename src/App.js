import React, { Component } from 'react';
import SearchBar from './Components/SearchBar'
import { StyleSheet, css } from 'aphrodite';

class App extends Component {
  render() {
    return (
      <div className={css(styles.app)}>
        <SearchBar />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    height: `100%`,
    background: `#000 url(https://upload.wikimedia.org/wikipedia/commons/a/a8/Falcon_9_first_stage_attempts_landing_on_ASDS_after_CRS-6_%2817170624412%29.jpg) no-repeat center`,
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
