import React, { Component } from 'react';
import SearchBar from './Components/SearchBar'
import Result from './Components/Result'
import { StyleSheet, css } from 'aphrodite';
import { connect } from "react-redux";
import { apiFetched } from "./actions";


class App extends Component {
  componentDidMount() {
    fetch("https://api.spacexdata.com/v2/launches/")
      .then(res => res.json())
      .then(json => this.props.apiFetched(json)); // (1)
  }
  render() {
    return (
      <div className={css(styles.app)}>
        <SearchBar apiData={this.props.apiData}/>
        <Result />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    height: `100%`,
    background: `gray`,
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});


const mapStateToProps = (state) => {
  return {
    apiData: state.apiData
  }
};
const mapDispatchToProps = { apiFetched }; 

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App); // (3)export default App;
