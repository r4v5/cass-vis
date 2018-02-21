import React, { Component } from 'react';
import { RadialChart, Hint } from 'react-vis';
import '../node_modules/react-vis/dist/style.css';
//import Machine from './Machine.js';

export default class Ring extends Component {
  state = {
    tooltip: false,
    nodes: [
      {angle: 2, radius: 10, innerRadius: 4},
      {angle: 2, radius: 10, innerRadius: 4},
      {angle: 2, radius: 10, innerRadius: 4}
    ]
  }
  render() {
    const {tooltip} = this.state;
    return (
      <div className="Ring">
      <RadialChart
        data={this.state.nodes}
        height={300}
        width={300}
        onValueMouseOver={v => this.setState({tooltip: v})}
        onSeriesMouseOut={v => this.setState({tooltip: false})}
        >
      {tooltip && <Hint value={tooltip}/>}
      </RadialChart>
      </div>
    )
  }
}
