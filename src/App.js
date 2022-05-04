import React, { Component } from "react";
import "./App.css";
import buttonBank from "./data";

class App extends Component {
  state = {
    miniDisplay: "",
    bigDisplay: 0,
  };
  handleClick = (button) => {
    if (button === "AC") {
      this.setState({
        miniDisplay: "",
        bigDisplay: 0,
      });
      // delete button
      // } else if (button === "DEL") {
      //   if (
      //     this.state.miniDisplay[this.state.miniDisplay.length - 1] ===
      //     this.state.bigDisplay[this.state.bigDisplay.length - 1]
      //   ) {
      //     this.setState({
      //       miniDisplay: this.state.miniDisplay.slice(
      //         0,
      //         this.state.miniDisplay.length - 1
      //       ),
      //       bigDisplay: this.state.bigDisplay.slice(
      //         0,
      //         this.state.bigDisplay.length - 1
      //       ),
      //     });
      //   } else {
      //     this.setState({
      //       bigDisplay: this.state.bigDisplay.slice(
      //         0,
      //         this.state.bigDisplay.length - 1
      //       ),
      //     });
      //   }
    } else if (typeof button === "number") {
      this.setState({
        miniDisplay: this.state.miniDisplay + button,
        bigDisplay:
          this.state.bigDisplay === 0 || isNaN(this.state.bigDisplay)
            ? button
            : "" + this.state.bigDisplay + button,
      });
    } else if (button === "=") {
      let result = null;
      if (
        this.state.miniDisplay[0] === "+" ||
        this.state.miniDisplay[0] === "-" ||
        this.state.miniDisplay[0] === "*" ||
        this.state.miniDisplay[0] === "/" ||
        this.state.miniDisplay[this.state.miniDisplay.length - 1] === "+" ||
        this.state.miniDisplay[this.state.miniDisplay.length - 1] === "-" ||
        this.state.miniDisplay[this.state.miniDisplay.length - 1] === "*" ||
        this.state.miniDisplay[this.state.miniDisplay.length - 1] === "/"
      ) {
        result = null;
      } else {
        result = Function("return " + this.state.miniDisplay)();
      }
      this.setState({
        bigDisplay: result !== null ? result : this.state.bigDisplay,
      });
    } else {
      // for + - / *
      this.setState({
        miniDisplay: isNaN(
          this.state.miniDisplay[this.state.miniDisplay.length - 1]
        )
          ? this.state.miniDisplay.slice(0, -1) + button
          : this.state.miniDisplay + button,
        bigDisplay: button,
      });
    }
  };
  render() {
    return (
      <div className="container">
        <div className="displays">
          <div className="mini-display">{this.state.miniDisplay}</div>
          <div className="big-display">{this.state.bigDisplay}</div>
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
