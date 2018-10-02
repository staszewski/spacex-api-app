import React, { Component } from "react";
import { connect } from "react-redux";
import { FETCH_DATA, UPDATE_INPUT } from "../constants/ActionTypes";

class Fetchdata extends Component {
  
  componentDidMount = () => {
    // tutaj jakis wewnetrzny state, zeby nie odpalac za kazdym mountowaniem?
      this.props.handleSubmit();
  }

  render() {
    const data = this.props.flights || {}
    console.log(data)
    return (
      <div>
        <input type="text"
               onChange={this.props.handleInputChange}
               value={this.props.value}/>   
        {data.filter(el => {
              return el.launch_year === this.props.value
          }).map((el, index) => {
              return <li>
                        {el.mission_name}
                    </li>
          })}   
      </div>
    );
  }
}


export const mapStateToProps = store => {
  return {
    flights: store.fetchdata.flights,
    value: store.fetchdata.value
  };
}; 

export const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: () => {
      fetch("https://api.spacexdata.com/v2/launches")
      .then(resp => resp.json())
      .then(data => dispatch({type: FETCH_DATA, payload: data })) 
    },
    handleInputChange: e => {
      dispatch({type: UPDATE_INPUT, payload: e.target.value})
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Fetchdata);
