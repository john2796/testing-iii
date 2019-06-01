import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({locked, closed, toggleLocked, toggleClosed,}) => (
  <div className="controls panel">
    <button 
    data-testid="closegate"
    type="button" disabled={!closed} onClick={toggleLocked} className="toggle-btn">
      {locked ? 'Unlock Gate' : 'Lock Gate'}
    </button>



    <button 
    data-testid="locked"
    type="button" disabled={locked} onClick={toggleClosed} className="toggle-btn">
      {closed ? 'Open Gate' : 'Close Gate'}
    </button>
  </div>
);

Controls.propTypes = {
  locked: PropTypes.bool,
  closed: PropTypes.bool,
  toggleLocked: PropTypes.func,
  toggleClosed: PropTypes.func,
};
export default Controls;
