import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';


class Result extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        currentClickedResultIndex: []
      }
    }
    
    // showData = index => e => {
    //     this.setState(({ currentClickedResultIndex }) => {
    //       if (currentClickedResultIndex.includes(index)) {
    //         return {
    //           currentClickedResultIndex: currentClickedResultIndex.filter(
    //             number => number !== index
    //           )
    //         };
    //       } else {
    //         return {
    //           currentClickedResultIndex: [...currentClickedResultIndex, index]
    //         };
    //       }
    //     });
    //   };
    
    render() {
      return (
        <div className="result">
            
        </div>
      )
    }
}

const styles = StyleSheet.create({
    result__data: {
        background: `#fff`,
        margin: 10,
        borderRadius: 30,
        textAlign: 'center',
        width: 300
    }
  });

export default Result