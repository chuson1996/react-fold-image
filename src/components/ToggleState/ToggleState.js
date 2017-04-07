import React, { Component } from 'react';

export default class ToggleState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: true
    };
  }

  toggle = () => {
    this.setState({ data: !this.state.data });
  };

  render() {
    return this.props.children({
      state: this.state.data,
      toggle: this.toggle
    });
  }
}
