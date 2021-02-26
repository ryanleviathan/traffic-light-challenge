import React, { Component } from "react";
import "./styles.css";
import { fetchLight, fetchNonRandomLight } from './fetch-light';

export default class App extends Component {
  state = {
    color: 'red'
  };

  Circles = ({ color, active }) => (
    <div
      className="circle"
      style={{ backgroundColor: color, opacity: active ? 1 : 0.2 }}
    />
  );

  onRandomClick = async() => {
    const color = await fetchLight();
    this.setState({ color });
  };

  onClick = async() => {
    const color = await fetchNonRandomLight(this.state.color);
    this.setState({ color });
  };

  render() {
    return (
      <>
        <button onClick={this.onRandomClick}>Random Change!</button>
        <button onClick={this.onClick}>Change!</button>
        <div className="container">
          <this.Circles color="red" active={this.state.color === 'red'} />
          <this.Circles color="yellow" active={this.state.color === 'yellow'} />
          <this.Circles color="green" active={this.state.color === 'green'} />
        </div>
      </>
    );
  }
}
