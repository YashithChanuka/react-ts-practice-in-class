import { Component } from "react";
import "./App.css";
import Content from "./components/Content";

export default class App extends Component {
  componentDidMount() {
    // console.log("Hello word");
  }

  render() {
    return (
      <div className="min-h-screen">
        <Content />
      </div>
    );
  }
}
