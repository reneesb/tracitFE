import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleIssue } from '../../../api/IssueData';
import CreateIssueForm from '../../../components/CreateIssueForm';

function EditIssue() {
  const [issue, setIssue] = useState([]);
  const router = useRouter();
  const { issueId } = router.query;

  useEffect(() => {
    getSingleIssue().then(setIssue);
  }, [issueId]);
  return (
    <CreateIssueForm obj={issue} />
  );
}

export default EditIssue;
