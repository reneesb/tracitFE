import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import { getSingleIssue } from '../../api/IssueData';
import IssueCard from '../../components/IssueCard';

function ViewIssue() {
  const [detail, setDetail] = useState([]);
  const router = useRouter();
  const { issueId } = router.query;

  useEffect(() => {
    getSingleIssue(issueId).then(setDetail);
  }, [issueId]);

  return (
    <IssueCard obj={detail} />

  );
}

export default ViewIssue;
