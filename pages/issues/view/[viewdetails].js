import React, { useEffect, useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { useRouter } from 'next/router';
import { getSingleIssue } from '../../../api/IssueData';
// import CommentCard from '../../../components/CommentCard';

function ViewDetails() {
  const [details, setDetails] = useState([]);
  const router = useRouter();
  const { viewdetails } = router.query;

  useEffect(() => {
    getSingleIssue(viewdetails).then(setDetails);
    console.log(viewdetails);
  }, [viewdetails]);

  return (
    <div>
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBCard className="w-75">
              <MDBCardBody>
                <MDBCardTitle>Title: {details?.title}</MDBCardTitle>
                <MDBCardText>
                  <p>Issue Id: {details?.issueId}</p>
                  <p>Created: {details?.dateTimeCreated}</p>
                  <p>Issue Status: {details?.issuestatuses !== undefined && details?.issuestatuses[0].status.statusName }</p>
                  <p>Description: {details?.description}</p>
                </MDBCardText>
                <MDBBtn href={`/issues/edit/${details.issueId}`}>Edit</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

    </div>

  );
}

export default ViewDetails;
