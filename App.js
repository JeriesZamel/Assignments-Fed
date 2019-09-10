import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/Router";
import Loading from "./Loading";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
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
    return this.state.isLoading ? <Loading /> : <AppRouter />;
  }
}

ReactDOM.render(<App />, document.querySelector("#container"));
