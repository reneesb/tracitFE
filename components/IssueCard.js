import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from 'mdb-react-ui-kit';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteIssue } from '../api/IssueData';

function IssueCard({ issueObj, onUpdate }) {
  const deleteThisIssue = () => {
    if (window.confirm('Delete issue?')) { deleteIssue(issueObj?.issueId).then(() => onUpdate()); }
  };

  useEffect(() => {
  });

  return (
    <div>
      <MDBRow>
        <MDBCol md="4">
          <MDBCard className="mb-4">
            <MDBCardBody>
              <MDBCardTitle>Issue#: {issueObj?.issueId} </MDBCardTitle>
              Status: {issueObj?.issuestatuses[0]?.status.statusName}
              <MDBCardText>
                <p>Title: {issueObj?.title}  </p>
              </MDBCardText>

              <Button href={`/issues/view/${issueObj?.issueId}`} variant="contained">View</Button> <DeleteIcon className="delete-icon" color="secondary" onClick={deleteThisIssue} />

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
