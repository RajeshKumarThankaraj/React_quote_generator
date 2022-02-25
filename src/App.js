import axios from "axios";
import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = { advice: "" };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice: advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="app d-flex justify-content-center align-items-center">
        <div className="container display-5">
          <div className="card text-center">
            <div className="card-header">Quote for the day!</div>
            <div className="card-body">
              <h5 className="card-title display-2">{advice}</h5>
              <button
                className="btn btn-outline-secondary"
                onClick={this.fetchAdvice}
              >
                New Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
