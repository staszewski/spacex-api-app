import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';


class Result extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        currentClickedResultIndex: []
      }
    }
    
    showData = index => e => {
        this.setState(({ currentClickedResultIndex }) => {
          if (currentClickedResultIndex.includes(index)) {
            return {
              currentClickedResultIndex: currentClickedResultIndex.filter(
                number => number !== index
              )
            };
          } else {
            return {
              currentClickedResultIndex: [...currentClickedResultIndex, index]
            };
          }
        });
      };
    
    render() {
        const { dataFromSearchBar, inputValue } = this.props 
        const currentClickedResultIndex = this.state.currentClickedResultIndex
        let apiData = dataFromSearchBar.filter(el => {
            return el.launch_year === inputValue
        }).map((el, index) => {
            return (
                <div className={css(styles.result__data)}
                     key={index}>
                    <h2 onClick={this.showData(index)}>{el.mission_name}</h2>
                    {
                        currentClickedResultIndex.includes(index) && 
                        <li>{el.launch_date_utc}</li>
                         
                    }           
                </div>
            )
        })
      return (
        <div className="result">
            {apiData}
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