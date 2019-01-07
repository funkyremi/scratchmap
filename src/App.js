import React, { Component } from "react";
import "./App.css";

class App extends Component {
  componentDidMount() {
    // eslint-disable-next-line no-undef
    jQuery("#vmap").vectorMap({
      map: "world_en",
      enableZoom: false,
      backgroundColor: "#fff",
      color: "#DDB155",
      hoverOpacity: 0.7,
      showTooltip: true,
      multiSelectRegion: true,
      selectedColor: "#26B2E5",
      showLabels: false,
      borderColor: '#000',
      borderWidth: 1,
      borderOpaticity: 1,
      onRegionSelect: function(event, code, region) {
        console.log(event, code, region)
      },
      onRegionDeselect: function(event, code, region) {
        console.log(event, code, region)
      }
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
