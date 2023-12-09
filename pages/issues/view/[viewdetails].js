/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
} from 'mdb-react-ui-kit';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { getSingleIssue } from '../../../api/IssueData';
import AssignUser from '../../../components/AssignUser';

function ViewDetails() {
  const [details, setDetails] = useState([]);
  const router = useRouter();
  const { viewdetails } = router.query;

  const reloadAssignees = () => {
    getSingleIssue(viewdetails).then(setDetails);
  };

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
                  Assigned User: {details?.issueUser?.map((user) => <span key="user.id"> {user.user.firstName}, </span>)}

                  <p>Description: {details?.description}</p>
                </MDBCardText>
                <Button href={`/issues/edit/${details.issueId}`} variant="contained">Edit</Button>
                <AssignUser issueUser={details?.issueUser !== undefined && details?.issueUser} issueId={details?.issueId} updateIssueUsers={reloadAssignees} />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

    </div>

  );
}

export default ViewDetails;
