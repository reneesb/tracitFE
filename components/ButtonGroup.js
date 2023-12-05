import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
// import createIssueStatus from '../api/StatusData';
// import { getSingleIssue } from '../api/IssueData';

function ButtonGroup({ currentStatus }) {
  console.log('status', currentStatus);
  // const [value, setValue] = useState(currentStatus);
  const [statusId, setStatusId] = useState(currentStatus);
  // const handleChange = (val) => setValue(val);
  // const handleSubmit = (val) => setValue(val);

  useEffect(() => {
    setStatusId(currentStatus);
  }, []);
  console.log('statusId', statusId);
  return (
    <div>
      <ToggleButtonGroup type="checkbox" value={statusId}>
        <ToggleButton id="tbg-btn-1" value={1} variant="primary" onClick={() => setStatusId(1)}>
          New
        </ToggleButton>
        <ToggleButton id="tbg-btn-2" value={2} variant="primary" onClick={() => setStatusId(2)}>
          In-Progress
        </ToggleButton>
        <ToggleButton id="tbg-btn-3" value={3} variant="primary" onClick={() => setStatusId(3)}>
          Closed
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

ButtonGroup.propTypes = {
  currentStatus: PropTypes.shape({
    currentStatus: PropTypes.number,
  }).isRequired,
};

export default ButtonGroup;
