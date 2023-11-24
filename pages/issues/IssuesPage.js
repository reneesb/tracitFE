import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {
  MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBBadge,
} from 'mdb-react-ui-kit';
import { useRouter } from 'next/router';
import { getAllIssues } from '../../api/IssueData';

function IssuesPage() {
  const [results, setResults] = useState();
  const router = useRouter();
  const { issueId } = router.query;

  useEffect(() => {
    getAllIssues().then((data) => setResults(data));
  }, [issueId]);

  return (
    <div>
      <MDBBtn href="/issues/new/NewIssue">Create New Issue</MDBBtn>
      <MDBTable className="mt-5">
        <MDBTableHead>
          <tr>
            <th scope="col">Issue Id</th>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col">Date/Time Created</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {results?.map((result) => (
            <>
              <tr key={result.issueId} />
              <td>{result?.issueId}</td>
              <td>{result?.title}</td>
              <td><h6><MDBBadge className="ms-2">{result?.status}</MDBBadge></h6></td>
              <td>{result?.dateTimeCreated}</td>
              <Link href="/issues/viewissue" passHref>
                <td><MDBBtn color="link">View</MDBBtn></td>
              </Link>
            </>
          ))}

        </MDBTableBody>
      </MDBTable>
    </div>
  );
}

IssuesPage.propTypes = {
  issueObj: PropTypes.shape({
    issueId: PropTypes.string,
    title: PropTypes.string,
    status: PropTypes.string,
    dateTimeCreated: PropTypes.instanceOf(Date),

  }).isRequired,

};

export default IssuesPage;
