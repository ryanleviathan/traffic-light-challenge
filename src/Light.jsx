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
    if(switch(this.light) === 0) this.setState({ light: fetchLights(2) })
    if(switch(this.light) === 2) this.setState({ light: fetchLights(1) })
    if(switch(this.light) === 1) this.setState({ light: fetchLights(0) })
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
