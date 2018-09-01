import React, { Component } from 'react';

class Result extends Component {
    render() {
        const { dataFromSearchBar, inputValue } = this.props 
        let apiData = dataFromSearchBar.filter(el => {
            return el.launch_year === inputValue
        }).map((el, index) => {
            return (
                <div key={index}>
                    {el.mission_name}
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

export default Result