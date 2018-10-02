import React, { Component } from "react";
import { connect } from "react-redux";
import { FETCH_DATA, UPDATE_INPUT } from "../constants/ActionTypes";
import Modal from 'react-modal';

class Fetchdata extends Component {
  
  componentDidMount = () => {
    // tutaj jakis wewnetrzny state, zeby nie odpalac za kazdym mountowaniem?
      this.props.handleSubmit();
  }

  render() {
    const dataToMap = this.props.flights || {}
    const modalData = this.props.flights.filter(el => {
      return el.launch_year === this.props.value
  })
  console.log(modalData)
    return (
      <div>
        <input type="text"
               onChange={this.props.handleInputChange}
               value={this.props.value}/>
        <div>   
        {dataToMap.filter(el => {
              return el.launch_year === this.props.value
          }).map(el => {
              return <div>
                        {el.mission_name}
                    </div>
          })}
          </div>   
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
