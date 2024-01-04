import { React, useState } from 'react';
// import { useRouter } from 'next/router';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { updateIssueStatus } from '../api/IssueData';
// import createIssueStatus from '../api/StatusData';
// import { getSingleIssue } from '../api/IssueData';

function ButtonGroup({ issueId, issueStatus }) {
  const [value, setValue] = useState(issueStatus || 1);
  // const handleChange = (val) => setValue(val);

  const handleStatusChange = ((newStatus) => {
    updateIssueStatus(issueId, newStatus).then(setValue(newStatus));
  });

  return (
    <ToggleButtonGroup type="checkbox" value={value} style={{ background: '#8927E0' }}>
      <ToggleButton id="tbg-btn-1" value={1} onClick={() => handleStatusChange(1)}>
        New
      </ToggleButton>
      <ToggleButton id="tbg-btn-2" value={2} onClick={() => handleStatusChange(2)}>
        In-Progress
      </ToggleButton>
      <ToggleButton id="tbg-btn-3" value={3} onClick={() => handleStatusChange(3)}>
        Closed
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

//   currentStatus: PropTypes.shape({
//     currentStatus: PropTypes.number,
//   }).isRequired,
// };

export default ButtonGroup;
