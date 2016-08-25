import React from 'react';
import {connect} from 'react-redux';
import {createLane} from '../actions/lanes';

class LanePlaceholder extends React.Component {
  render() {
    return (
      <div
        className="lane-placeholder"
        onClick={this.props.createLane.bind(null, { name: 'New lane' })}
      >
        Add a lane...
      </div>
    );
  }
}

export default connect(
  () => ({}),
  { createLane }
)(LanePlaceholder);
