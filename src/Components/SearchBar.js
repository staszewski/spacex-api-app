import React, { Component } from 'react';
import Result from './Result';
import { StyleSheet, css } from 'aphrodite';


class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: ''
        }
    }

    handleInputChange = () => {
        this.setState({
            inputValue: this.search.value
        })
    }

    render() {

        console.log(this.props.apiData)

        return (
            <div className={css(styles.searchbar)}>
                <label className={css(styles.label)}>
                    Insert a year between 2006-2018
                </label>
                <input className={css(styles.input)} 
                       type="text"
                       value={this.state.inputValue}
                       onChange={this.handleInputChange}
                       ref={input => this.search = input}
                       placeholder="type a year" />
                <button onClick={this.filterData}>Click</button>   
            </div>
        )
    }
}

const styles = StyleSheet.create({
    searchbar: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    input: {
        fontSize: 18,
        padding: 5,
        display: 'block',
        width: 320,
        border: 'none',
        borderBottom: `1px solid #757575`,
        borderRadius: 5
    },
    label: {
        color: '#fff',
        textAlign: 'center'
    }
  });

export default SearchBar