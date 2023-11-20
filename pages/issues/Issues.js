import React from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

function Issues() {
  return (
    <div>
      <Link href="/issues/new/NewIssue"><Button>Create New Issue</Button></Link>
    </div>
  );
}

export default Issues;
