import React, { useEffect, useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import Link from 'next/link';
import IssueCard from '../../components/IssueCard';
import { getAllIssues } from '../../api/IssueData';

function ViewIssues() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    getAllIssues().then(setIssues);
  }, []);
  return (
    <div>
      <Link href="/issues/new/NewIssue">
        <MDBBtn className="mt-5 mb-2">Create Issue</MDBBtn>
      </Link>
      {issues?.map((issue) => (
        <IssueCard key={issue.issueId} issueObj={issue} />
      ))}
    </div>
  );
}

export default ViewIssues;
