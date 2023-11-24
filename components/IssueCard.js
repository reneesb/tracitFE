import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBBadge,
  MDBBtn,

} from 'mdb-react-ui-kit';
import { getSingleIssue } from '../api/IssueData';

function IssueCard() {
  const [issue, setIssue] = useState([]);

  useEffect(() => {
    getSingleIssue().then(setIssue);
  }, [issue]);

  return (
    <div>
      <MDBCard className="mt-5">
        <MDBCardHeader><h3>Issue ID: {issue.issueId}</h3>
          <h6>
            <MDBBadge className="ms-2" color="primary light">{issue.status}</MDBBadge>
          </h6>
          Date Created: {issue.dateTimeCreated}
        </MDBCardHeader>
        <MDBCardBody>
          <span>Description: {issue.description}</span>
        </MDBCardBody>
      </MDBCard>
      <MDBBtn className="me-1 mt-3" href={`/issues/edit/${issue.issueId}`}>
        Edit Issue
      </MDBBtn>
    </div>
  );
}

IssueCard.propTypes = {
  issueObj: PropTypes.shape({
    issueId: PropTypes.number,
    status: PropTypes.string,
    description: PropTypes.string,
    dateTimeCreated: PropTypes.instanceOf(Date),
  }).isRequired,
};

export default IssueCard;
