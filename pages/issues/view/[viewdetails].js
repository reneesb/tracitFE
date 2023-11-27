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
  MDBTextArea,
} from 'mdb-react-ui-kit';
import { useRouter } from 'next/router';
import { getSingleIssue } from '../../../api/IssueData';

function ViewDetails() {
  const [viewDet, setViewDet] = useState([]);
  const router = useRouter();
  const { viewdetails } = router.query;

  useEffect(() => {
    getSingleIssue(viewdetails).then(setViewDet);
  }, []);

  return (
    <div>
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBCard className="w-75">
              <MDBCardBody>
                <MDBCardTitle>Title: {viewDet?.title}</MDBCardTitle>
                <MDBCardText>
                  <p>Issue Id: {viewDet?.issueId}</p>
                  <p>Created: {viewDet?.dateTimeCreated}</p>
                  <p>Issue Status {viewDet?.status}</p>
                  <p>Description: {viewDet?.description}</p>
                </MDBCardText>
                <MDBBtn href={`/issues/edit/${viewDet.issueId}`}>Edit</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <h4 className="mt-5">Enter Comments</h4>
          <MDBTextArea id="textAreaExample" rows={4} className="mt-5" />
          <MDBBtn>Save</MDBBtn>
        </MDBRow>

      </MDBContainer>

    </div>
  );
}

export default ViewDetails;
