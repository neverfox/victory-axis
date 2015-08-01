/*global document:false*/
import React from "react";
import {VictoryAxis} from "../src/index";

class App extends React.Component {
  render() {
    const style = {
        border: "2px solid black",
        margin: "50",
        width: "350",
        height: "350"
    };

    return (
      <div className="demo">
        <svg style={style}>
          < VictoryAxis style={style}/>
        </svg>
      </div>
    );
  }
}

const content = document.getElementById("content");

React.render(<App/>, content);