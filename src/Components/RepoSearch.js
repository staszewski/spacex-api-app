import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite'
import constans from '../store/constans';
import Modal from 'react-modal';


const RepoSearch = (props) => {
    const modalData = props.repos.filter(el => {
        return el.launch_year === props.value
    })
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input type="text"
               value={props.value}
               onChange={props.handleInputChange}
               className={css(styles.input)}/>
      </form>
      <ul>
          {props.repos.filter(el => {
              return el.launch_year === props.value
          }).map((el, index) => {
              return <li className={css(styles.searchResults)}
                         key={index}
                         onClick={()=> props.displayModal(index)}>
                        {el.mission_name}
                    </li>
          })}
      </ul>
      <Modal
          isOpen={props.showModal}
          contentLabel="Example Modal"
          onRequestClose={props.closeModal}
          shouldCloseOnOverlayClick={true}
        >
          <div>
          {props.showModal ? 
          <div>
            <h2>{modalData[props.indexModal].mission_name}</h2>
            <img src={modalData[props.indexModal].links.mission_patch} alt=""/>
          </div>
            :
            <h2>showmodal is false</h2>
          } 
          </div>
        </Modal>
    </div>
  )
}

const mapStateToProps = (state) => ({
    value: state.searchInputValue,
    repos: state.repos,
    showModal: state.showModal,
    closeModal: state.showModal,
    indexModal: state.indexModal
})

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange: e => {
            dispatch({type: 'UPDATE_INPUT', value: e.target.value})
        },
        handleSubmit: e => {
          e.preventDefault();

          fetch(`https://api.spacexdata.com/v2/launches`)
          .then(resp => resp.json())
          .then(data => dispatch({type: 'SET_REPOS', repos: data })) 

        },
        displayModal: (index) => {
            const action = {type: constans.SHOW_MODAL, index: index}
            dispatch(action)
        },
        closeModal: () => {
            const action = {type: constans.CLOSE_MODAL}
            dispatch(action)
        }
    }
}

const styles = StyleSheet.create({
    searchResults: {
        color: '#000',
        background: '#fff',
        borderRadius: 20,
        textAlign: 'center',
        padding: 10,
        margin: 5
    },
    input: {
        width: `100%`
    }
  });


export default connect(mapStateToProps, mapDispatchToProps)(RepoSearch)
