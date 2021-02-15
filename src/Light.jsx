import React, { Component, setState } from 'react';
import AlbumList from '../components/albums/AlbumList';
import './styles.css';
import { fetchLights } from './fetch-light';

export default class Light extends Component {
  state = {
    light = fetchLights()
  }

  // function that lights a random light
  onRandonClick = () => {
    this.setState({ light: fetchLights() })
  }

  // function that follows traffic light conventions
  onSystemicClick = () => {
    this.setState({ light: fetchLights() })
  }

  render(){
    switch(this.light) {

    return ( 
      <>
        <AlbumList releases={albums} name={this.props.match.params.name} />
      </>
    );
  }
}
