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
    background: `#000 url(https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});



export default App; 
