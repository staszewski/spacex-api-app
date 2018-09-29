import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import store from './store/store';
import RepoSearch from './Components/RepoSearch'


class App extends Component {
  render() {
    return (
      <div className={css(styles.app)}>
        <RepoSearch store={store}/>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    height: `100%`,
    background: `#fff url(https://svgshare.com/i/8Gt.svg)`,
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});



export default App; 
