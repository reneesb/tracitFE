import React from 'react';
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
import { deleteIssue } from '../api/IssueData';

function IssueCard({ issueObj, onUpdate }) {
  const deleteThisIssue = () => {
    if (window.confirm('Delete issue?')) { deleteIssue(issueObj?.issueId).then(() => onUpdate()); }
  };

  return (
    <div>
      <MDBRow>
        <MDBCol sm="4">
          <MDBCard className="mb-4">
            <MDBCardBody>
              <MDBCardTitle>Issue#: {issueObj?.issueId} </MDBCardTitle>

              <MDBCardText>
                <p>Title: {issueObj?.title}</p>
              </MDBCardText>

              <MDBBtn href={`/issues/view/${issueObj?.issueId}`}>View</MDBBtn> <MDBBtn color="link" onClick={deleteThisIssue}>Delete</MDBBtn>

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
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,

};

export default IssueCard;
