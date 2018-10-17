import React from 'react'
import Fetchdata from '../components/Fetchdata';
import { connect } from "react-redux";
import { FETCH_DATA, UPDATE_INPUT, SHOW_MODAL, CLOSE_MODAL } from "../constants/ActionTypes";


function FetchDataContainer(props) {
  return (
    <Fetchdata flights={props.flights}
                value={props.value}
                showModal={props.showModal}
                closeModal={props.closeModal}
                indexModal={props.indexModal}
                handleSubmit={props.handleSubmit}
                handleInputChange={props.handleInputChange}
                displayModal={props.displayModal}
                closeModalFunc={props.closeModalFunc}
                 />
  )
}

export const mapStateToProps = store => {
    return {
      flights: store.fetchdata.flights,
      value: store.fetchdata.value,
      showModal: store.fetchdata.showModal,
      closeModal: store.fetchdata.showModal,
      indexModal: store.fetchdata.indexModal
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
      },
      displayModal: (index) => {
        const action = {type: SHOW_MODAL, payload: index}
        dispatch(action)
      },
      closeModalFunc: () => {
        const action = {type: CLOSE_MODAL}
        dispatch(action)
      }
    };
  };
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(FetchDataContainer);

