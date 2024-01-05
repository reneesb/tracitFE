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
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import { useRouter } from 'next/router';
import { getSingleIssue } from '../../../api/IssueData';
import AssignUser from '../../../components/AssignUser';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8927E0',
    },
    secondary: {
      main: '#36c5f4',
    },
  },
});

function ViewDetails() {
  const [details, setDetails] = useState([]);
  const router = useRouter();
  const { viewdetails } = router.query;
  const [, setIssueId] = useState(0);

  const reloadAssignees = () => {
    getSingleIssue(viewdetails).then(setDetails);
  };

  useEffect(() => {
    getSingleIssue(viewdetails).then(setDetails);
    setIssueId(details?.issueId);
  }, [viewdetails]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <MDBCard className="w-75" id="border">
                <MDBCardBody>
                  <MDBCardTitle>Title: {details?.title}</MDBCardTitle>
                  <MDBCardText>
                    <p>Issue Id: {details?.issueId}</p>
                    <p>Created: {details?.dateTimeCreated}</p>
                    <p>Issue Status: {details?.issuestatuses !== undefined && details?.issuestatuses[0]?.status.statusName }</p>
                    Assigned User: {details?.issueUser?.map((assignee) => <span key={assignee.id}> {assignee.user.firstName}, </span>)}

                    <p>Description: {details?.description}</p>
                  </MDBCardText>
                  <Fab href={`/issues/edit/${details?.issueId}`} variant="contained" color="primary"><EditIcon /></Fab>
                  <AssignUser issueUser={details?.issueUser !== undefined && details?.issueUser} issueId={details?.issueId} updateIssueUsers={reloadAssignees} />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <hr />
      </ThemeProvider>

    </div>

  );
}

export default ViewDetails;
