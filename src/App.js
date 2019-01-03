import React, { Component } from "react";
import "./App.css";

class App extends Component {
  componentDidMount() {
    // eslint-disable-next-line no-undef
    jQuery("#vmap").vectorMap({
      map: "world_en",
      enableZoom: false,
    });
  }
  render() {
    return (
      <div className="App">
        <div id="vmap" style={{ width: "100%", height: window.innerHeight }} />
      </div>
    );
  }
}

export default App;
