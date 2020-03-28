import React from "react";
import * as Font from "expo-font";

export default class FontProvider extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      "noto-sans": require("../../../Asset/font/noto-sans/light.ttf"),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return this.state.fontLoaded ? this.props.children : null;
  }
}
