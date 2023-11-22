import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { getSingleIssue } from '../../api/IssueData';

function ViewIssue() {
  const [detail, setDetail] = useState([]);
  const router = useRouter();
  const { issueId } = router.query;

  useEffect(() => {
    getSingleIssue(issueId).then(setDetail);
  }, []);

  return (
    <div>
      <h2>View Issue</h2>
      <h3>{detail.issueId}</h3>
      <p>{detail.title}</p>
    </div>
  );
}

export default ViewIssue;
