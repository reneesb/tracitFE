import React, { useEffect, useState } from 'react';
import {
  MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBBadge,
} from 'mdb-react-ui-kit';
import { getAllIssues } from '../../api/IssueData';

function IssuesPage() {
  const [results, setResults] = useState();

  useEffect(() => {
    getAllIssues().then((data) => setResults(data));
  }, []);

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
              <td><MDBBtn color="link">View</MDBBtn></td>
            </>
          ))}

        </MDBTableBody>
      </MDBTable>
    </div>
  );
}

export default IssuesPage;
