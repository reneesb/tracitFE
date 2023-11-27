import React from 'react';
import PropTypes from 'prop-types';
import {
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBBadge,
  MDBCol,
} from 'mdb-react-ui-kit';

function IssueCard({ issueObj }) {
  return (
    <div>
      <MDBRow>
        <MDBCol sm="4">
          <MDBCard className="mb-4">
            <MDBCardBody>
              <MDBCardTitle>Issue#: {issueObj?.issueId} <MDBBadge pill className="position-relative">{issueObj?.status}</MDBBadge></MDBCardTitle>
              <MDBCardText>
                <p>Title: {issueObj?.title}</p>
              </MDBCardText>

              <MDBBtn href="/issues/viewdetails">View</MDBBtn>

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
    dateTimeCreated: PropTypes.instanceOf(Date),
  }).isRequired,

};

export default IssueCard;
