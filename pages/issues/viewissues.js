import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';
import IssueCard from '../../components/IssueCard';
import { getAllIssues } from '../../api/IssueData';

function ViewIssues() {
  const [issues, setIssues] = useState([]);
  const onUpdate = () => {
    getAllIssues().then(setIssues);
  };
  useEffect(() => {
    getAllIssues().then(setIssues);
    console.log(issues);
  }, []);

  return (
    <div>
      <Link href="/issues/new/NewIssue" passHref>
        <Button className="mt-5 mb-2" variant="contained">Create Issue</Button>
      </Link>
      {issues?.map((issue) => (
        <IssueCard key={issue.issueId} issueObj={issue} onUpdate={onUpdate} />

      ))}
    </div>

  );
}

export default ViewIssues;
