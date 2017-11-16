import React, { Component } from 'react';

export default class MadLine extends Component{
  constructor({ width,height, ...rest }){
    super({ width,height, ...rest });
  }
  componentWillMount(){
    console.log('will');

  }
  componentDidMount(){
    console.log('did');

  }
  setCanvas() {
    console.log('set');
  }
  render() {
    console.log('render');
    return (
      <canvas ref={(c) => this.setCanvas(c)} />
    );
  }
}
