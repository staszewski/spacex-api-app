import React, { Component } from 'react';
import Result from './Result';



class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: '',
            data: []
        }
    }

    handleInputChange = () => {
        this.setState({
            inputValue: this.search.value
        }, () => {
            if (this.state.inputValue.length > 3) {
                // tutaj lepsza walidacja by się przydała niż tylko length > 3
                this.apiCall();
            } 
        })
    }


    apiCall = () => {
        fetch('https://api.spacexdata.com/v2/launches/')
            .then(resp => resp.json())
            .then(data => this.setState({
                data: data
            }))
    }

    render() {




        return (
            <div className="searchbar">
                <label>Insert a year between 2006-2018</label>
                <span className="highlight"></span>
                <span className="bar"></span>
                <input type="text"
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    ref={input => this.search = input}
                    placeholder="type a year" />    
                <Result dataFromSearchBar={this.state.data} 
                        inputValue={this.state.inputValue}/>
            </div>
        )
    }
}

export default SearchBar