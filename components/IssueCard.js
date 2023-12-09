import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCol,
} from 'mdb-react-ui-kit';
import Button from '@mui/material/Button';
import { deleteIssue } from '../api/IssueData';

function IssueCard({ issueObj, onUpdate }) {
  const deleteThisIssue = () => {
    if (window.confirm('Delete issue?')) { deleteIssue(issueObj?.issueId).then(() => onUpdate()); }
  };

  useEffect(() => {
    console.log(issueObj);
  });

  return (
    <div>
      <MDBRow>
        <MDBCol md="4">
          <MDBCard className="mb-4">
            <MDBCardBody>
              <MDBCardTitle>Issue#: {issueObj?.issueId} </MDBCardTitle>
              <p> {issueObj.issuestatuses[0].status.statusName}</p>
              {/* {issueObj?.issuestatuses.map((issuestatus) => <span key={issuestatus.id}>{issuestatus.status.statusName}</span>)} */}
              <MDBCardText>
                <p>Title: {issueObj?.title}  </p>
              </MDBCardText>

              <Button href={`/issues/view/${issueObj?.issueId}`} variant="contained">View</Button> <MDBBtn color="link" onClick={deleteThisIssue}>Delete</MDBBtn>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

IssueCard.propTypes = {
  issueObj: PropTypes.shape({
    issueId: PropTypes.number,
    title: PropTypes.string,
    status: PropTypes.string,
    statusName: PropTypes.string,
    dateTimeCreated: PropTypes.instanceOf(Date),
    // eslint-disable-next-line react/forbid-prop-types
    issuestatuses: PropTypes.array,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,

};

export default IssueCard;
