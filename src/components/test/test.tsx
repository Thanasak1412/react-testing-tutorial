import React from 'react';

export default class MyComponent extends React.Component {
  state = {
    clicked: false,
  };

  myFunction = () => {
    this.setState({ clicked: true });
  };

  render() {
    return (
      <div>
        <button onClick={this.myFunction}>Click me</button>
        {this.state.clicked && <div>Button clicked!</div>}
      </div>
    );
  }
}
