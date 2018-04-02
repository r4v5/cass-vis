import React, { Component } from 'react';
import Ring from "./Ring.js";
export default class Cluster extends Component {

  render() {
    return (
        <div>
        {this.props.datacenters.map(datacenter => (
          <Ring nodes={datacenter.nodes} key={this.props.cluster_name + datacenter.datacenter_name}/>
        ))}
        </div>
      )
    }
  }
