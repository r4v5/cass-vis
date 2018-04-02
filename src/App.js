import React, { Component } from 'react';
import './Meyer.css';
import './App.css';

import Cluster from './Cluster.js';

class App extends Component {
  state = {
    clusters: [
      {cluster_name: "Cluster 1", datacenters: [
        {datacenter_name: "us", nodes: [
          {node_name: "node1.us", details: "node 1 details", size_on_disk: 100},
          {node_name: "node2.us", details: "node 2 details", size_on_disk: 80},
          {node_name: "node3.us", details: "node 3 details", size_on_disk: 120},
        ]
      },
      {datacenter_name: "eu", nodes: [
        {node_name: "node1.eu", details: "node 1 details", size_on_disk: 85},
        {node_name: "node2.eu", details: "node 2 details", size_on_disk: 105},
        {node_name: "node3.eu", details: "node 2 details", size_on_disk: 110},
      ]}
    ]
  }
]
}


render() {
  const {clusters} = this.state;
  return (
    <div className="App">
    {clusters.map( cluster => (
      <div id={cluster.cluster_name} key={cluster.cluster_name}>
        <div className="clustername">{cluster.cluster_name}</div>
        <Cluster cluster_name={cluster.cluster_name} datacenters={cluster.datacenters}/>
      </div>
    ))}
    </div>
  );
}
}

export default App;
