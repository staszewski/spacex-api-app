import React, { Component } from "react";
import { connect } from "react-redux";
import { FETCH_DATA } from "../constants/ActionTypes";
import { link } from "fs";

class Fetchdata extends Component {

  componentDidMount = () => {
    this.props.handleSubmit()
  }
  

  render() {
    const data = this.props.users || {}
    return (
      <div>
        {data.map((el => {
          return (
            <li>{el.name}</li>
          )
        }))}
      </div>
    );
  }
}


export const mapStateToProps = store => {
  return {
    users: store.fetchdata.users
  };
}; 

export const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: () => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(data => dispatch({type: FETCH_DATA, users: data })) 

    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Fetchdata);
