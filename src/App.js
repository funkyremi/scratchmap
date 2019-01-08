/* global jQuery*/
import React, { Component } from "react";
import Swal from "sweetalert2";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountries: [],
    };
  }
  componentDidMount() {
    jQuery("#vmap").vectorMap({
      map: "world_en",
      enableZoom: false,
      backgroundColor: "#343a41",
      color: "#caa30a",
      hoverOpacity: 0.9,
      showTooltip: true,
      multiSelectRegion: true,
      selectedColor: "#00abe7",
      showLabels: false,
      borderColor: "#000",
      selectedCountries: this.state.selectedCountries,
      onRegionClick: (event, code, region) => {
        event.preventDefault();
        if (this.state.selectedCountries.find(c => c.toLowerCase() === code.toLowerCase())) {
          Swal({
            title: `Remove ${region}?`,
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "👎",
            confirmButtonText: "👍"
          }).then(result => {
            if (result.value) {
              const selectedCountries = this.state.selectedCountries;
              const index = selectedCountries.findIndex(c => c.toLowerCase() === code.toLowerCase());
              selectedCountries.splice(index, 1)
              this.setState({
                selectedCountries,
              });
              jQuery("#vmap").vectorMap('deselect', code);
            }
          });
        } else {
          Swal({
            title: `Have you visited ${region}?`,
            type: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "👎",
            confirmButtonText: "👍"
          }).then(result => {
            if (result.value) {
              const selectedCountries = this.state.selectedCountries;
              selectedCountries.push(code.toUpperCase());
              this.setState({
                selectedCountries,
              });
              jQuery("#vmap").vectorMap('select', code);
              Swal("Country visited!", "🚌 🗺 You are an explorator! 😍 🧳", "success");
            }
          });
        }
      },
    });
  }
  render() {
    return (
      <div className="App">
        <div id="vmap" style={{ width: "100%", height: window.innerHeight }} />
        <footer>{this.state.selectedCountries.length} countr{this.state.selectedCountries.length > 1 ? 'ies' : 'y'} visited</footer>
      </div>
    );
  }
}

export default App;
