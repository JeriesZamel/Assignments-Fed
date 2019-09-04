import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 1000);
  }

 
  render() {
    return this.state.isLoading ? (
      <img src="simpson.gif"></img>
    ) : (
     <h1>Head</h1>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#container"));
