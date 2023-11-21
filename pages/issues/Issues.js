import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Link from 'next/link';

function Issues() {
  return (
    <>
      <Container>
        <Link href="/issues/new/NewIssue"><Button>Create New Issue</Button></Link>
      </Container>

    </>
  );
}

export default Issues;
