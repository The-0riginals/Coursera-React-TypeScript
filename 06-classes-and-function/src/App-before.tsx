import React from 'react';

class Counter extends React.Component {

  render() {
    return (
      <div>
        <p>
          {this.props.message} {this.state.count}
        </p>
      </div>
    );
  }
}

class Application extends React.Component {
  render() {
    return <Counter />;
  }
}


export default Application;
