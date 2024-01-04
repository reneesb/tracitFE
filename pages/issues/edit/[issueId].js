import { useState, useEffect } from 'react';
import { MDBCol } from 'mdb-react-ui-kit';
import { useRouter } from 'next/router';
import CreateIssueForm from '../../../components/CreateIssueForm';
import { getSingleIssue } from '../../../api/IssueData';

function ViewSingleIssue() {
  const [issue, setIssue] = useState({});
  const router = useRouter();
  const { issueId } = router.query;

  useEffect(() => {
    getSingleIssue(issueId).then(setIssue);
  }, []);

  return (
    <>
      <div>
        <MDBCol>
          {Object.keys(issue).length > 0 && <CreateIssueForm obj={issue} />}
        </MDBCol>
      </div>
      {/* <div>
        <MDBCol>
          <Form.Select>Change Status</Form.Select>
        </MDBCol>
      </div> */}
    </>
  );
}

export default ViewSingleIssue;
