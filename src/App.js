import React, { Component } from "react";
import FetchDataContainer from "./containers/FetchDataContainer";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <FetchDataContainer />
      </div>
    );
  }
}

export default App;
