import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import IssueCard from '../../components/IssueCard';
import { getAllIssues } from '../../api/IssueData';
import CreateButton from '../../components/CreateButton';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8927E0',
    },
    secondary: {
      main: '#36c5f4',
    },
  },
});

function ViewIssues() {
  const [issues, setIssues] = useState([]);
  const onUpdate = () => {
    getAllIssues().then(setIssues);
  };
  useEffect(() => {
    getAllIssues().then(setIssues);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <container>
          <h2 className="issuepage-header" style={{ color: '#8927E0' }}>TracIT Issue Tracker</h2>
          <h3 className="issuepage-header">List View</h3>

        </container>
        <div>
          <Link href="/issues/new/NewIssue" passHref>
            <CreateButton />
          </Link>
          <div className="d-flex flex-wrap">
            {issues?.map((issue) => (
              <IssueCard key={issue.issueId} issueObj={issue} onUpdate={onUpdate} />
            ))}

          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default ViewIssues;
