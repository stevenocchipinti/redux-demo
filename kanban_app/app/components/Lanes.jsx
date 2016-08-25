import React from 'react';
import Lane from './Lane.jsx';

export default ({lanes}) => {
  let laneComponents = lanes.map(lane => {
    return <Lane className="lane" key={lane.id} lane={lane} />;
  });
  return (
    <div className="lanes">
      {laneComponents}
      <div className="lane-placeholder">Add a lane...</div>
    </div>
  );
};
