import React, { Component } from 'react';
import { RadialChart, Hint } from 'react-vis';
import '../node_modules/react-vis/dist/style.css';

export default class Ring extends Component {
  state = {
    tooltip: false,
    nodes: [
      {label: "node 1", subLabel: "node 1 details", angle: 1},
      {label: "node 2", subLabel: "node 2 details", angle: 1},
      {label: "node 3", subLabel: "node 3 details", angle: 1}
    ]
  }
  render() {
    const {tooltip} = this.state;
    return (
      <div className="Ring">
      <RadialChart
        data={this.props.nodes.map(node => (
          {label: node.node_name, subLabel: node.details, innerRadius: 4, radius: 10, angle: node.size_on_disk}
        ))}
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
