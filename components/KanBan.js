import { useState, useEffect } from 'react';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import IssueCard from './IssueCard';
import CreateButton from './CreateButton';
import { getAllIssues, updateIssueStatus } from '../api/IssueData';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function KanBan() {
  const [issues, setIssues] = useState([]);
  const [dragTgt, setDragTgt] = useState(null);
  const [, setTargetStatus] = useState(issues);
  //  set drag target on drag
  const handleDrag = (id) => {
    setDragTgt(id);
  };

  useEffect(() => {
    getAllIssues().then(setIssues);
  }, []);

  return (
    <div>
      <div>
        <Link href="/issues/new/NewIssue" passHref>
          <CreateButton />
        </Link>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          onDragEnter={(e) => e.preventDefault()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            if (
              issues.find((issue) => issue.issueId === dragTgt).statusId
                !== e.target.closest('.kanban-col').id
            ) {
              const newStatus = e.target.closest('.kanban-col').id;
              setTargetStatus(newStatus);
              updateIssueStatus(dragTgt, newStatus).then(() => {
                getAllIssues().then(setIssues);
              });
            }
          }}

        >
          <Grid xs={4} className="kanban-col" id="1">
            <Item className="kanban-item">New</Item>
            {issues
              .filter((issue) => issue?.issuestatuses[0]?.status.statusId === 1)
              .map((issue) => (
                <IssueCard key={issue.issueId} issueObj={issue} onUpdate={() => {}} draggable handleDrag={handleDrag} />
              ))}
          </Grid>
          <Grid xs={4} className="kanban-col" id="2">
            <Item className="kanban-item">In-Progress</Item>
            {issues
              .filter((issue) => issue?.issuestatuses[0]?.status.statusId === 2)
              .map((issue) => (
                <IssueCard key={issue.issueId} issueObj={issue} onUpdate={() => {}} draggable handleDrag={handleDrag} />
              ))}
          </Grid>
          <Grid xs={4} className="kanban-col" id="3">
            <Item className="kanban-item">Closed</Item>
            {issues
              .filter((issue) => issue?.issuestatuses[0]?.status.statusId === 3)
              .map((issue) => (
                <IssueCard key={issue.issueId} issueObj={issue} onUpdate={() => {}} draggable handleDrag={handleDrag} />
              ))}
          </Grid>

        </Grid>
      </Box>
    </div>
  );
}

export default KanBan;
