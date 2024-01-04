import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import DragAndDropCard from './DragAndDropCard';
import { getAllIssues } from '../api/IssueData';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function IssueBoard() {
  const [issues, setIssues] = useState(null);
  const [dragTgt, setDragTgt] = useState(null);

  useEffect(() => {
    getAllIssues().then(setIssues);
  }, []);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={4}>
            <Item>New</Item>
            <div className="card" />
          </Grid>
          <Grid xs={4}>
            <Item>In-Progress</Item>
            <div>
              {}
            </div>
          </Grid>
          <Grid xs={4}>
            <Item>Closed</Item>
          </Grid>

        </Grid>
      </Box>
    </div>
  );
}

export default IssueBoard;
