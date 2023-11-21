import PropTypes from 'prop-types';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from 'mdb-react-ui-kit';

function IssueCard({ issueObj }) {
  return (
    <>
      <MDBCard className="w-25">
        <MDBCardBody>
          <MDBCardTitle>Issue#-</MDBCardTitle>
          <MDBCardText>{issueObj?.issueId}</MDBCardText>
          <MDBCardText>{issueObj?.description}</MDBCardText>
          <MDBCardText>{issueObj?.dateTimeCreated}</MDBCardText>
          <MDBBtn href="#">Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}

IssueCard.propTypes = {
  issueObj: PropTypes.shape({
    issueId: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    dateTimeCreated: PropTypes.instanceOf(Date),
  }).isRequired,
};

export default IssueCard;
