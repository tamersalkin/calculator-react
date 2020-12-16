import React, { Component } from "react";
import "./App.css";

const buttonBank = [
  {
    buttonid: 1,
    id: "clear",
    button: "AC",
  },
  {
    buttonid: 2,
    id: "divide",
    button: "/",
  },
  {
    buttonid: 3,
    id: "multiply",
    button: "*",
  },
  {
    buttonid: 4,
    id: "seven",
    button: 7,
  },
  {
    buttonid: 5,
    id: "eight",
    button: 8,
  },
  {
    buttonid: 6,
    id: "nine",
    button: 9,
  },
  {
    buttonid: 7,
    id: "subtract",
    button: "-",
  },
  {
    buttonid: 8,
    id: "four",
    button: 4,
  },
  {
    buttonid: 9,
    id: "five",
    button: 5,
  },
  {
    buttonid: 10,
    id: "six",
    button: 6,
  },
  {
    buttonid: 11,
    id: "add",
    button: "+",
  },
  {
    buttonid: 12,
    id: "one",
    button: 1,
  },
  {
    buttonid: 13,
    id: "two",
    button: 2,
  },
  {
    buttonid: 14,
    id: "three",
    button: 3,
  },
  {
    buttonid: 15,
    id: "equals",
    button: "=",
  },
  {
    buttonid: 16,
    id: "delete",
    button: "DEL",
  },
  {
    buttonid: 17,
    id: "zero",
    button: 0,
  },
  {
    buttonid: 18,
    id: "decimal",
    button: ".",
  },
];

class App extends Component {
  state = {
    miniDisplay: "",
    bigDisplay: 0,
  };
  handleClick = (a) => {
    if (a === "AC") {
      this.setState({
        miniDisplay: "",
        bigDisplay: 0,
      });
    } else if (a === "DEL") {
    } else if (a === "=") {
      this.setState({
        bigDisplay: +this.state.miniDisplay,
      });
    } else {
      if (typeof a === "number") {
        this.setState({
          miniDisplay: this.state.miniDisplay + a,
          bigDisplay:
            this.state.bigDisplay === 0 || isNaN(+this.state.bigDisplay)
              ? a
              : this.state.bigDisplay + "" + a,
        });
      } else {
        this.setState({
          miniDisplay: isNaN(
            this.state.miniDisplay[this.state.miniDisplay.length - 1]
          )
            ? this.state.miniDisplay.slice(0, -1) + a
            : this.state.miniDisplay + a,
          bigDisplay: a,
        });
      }
    }
  };
  render() {
    return (
      <div className="container">
        <div className="displays">
          <div className="display">{this.state.miniDisplay}</div>
          <div className="display">{this.state.bigDisplay}</div>
        </div>
        <div className="buttons">
          {buttonBank.map((x) => (
            <div
              onClick={() => this.handleClick(x.button)}
              id={x.id}
              className="button"
              style={{ gridArea: x.id }}
            >
              {x.button}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
