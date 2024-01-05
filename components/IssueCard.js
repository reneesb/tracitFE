import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteIssue } from '../api/IssueData';

function IssueCard({
  issueObj, onUpdate, draggable, handleDrag,
}) {
  const deleteThisIssue = () => {
    if (window.confirm('Delete issue?')) { deleteIssue(issueObj?.issueId).then(() => onUpdate()); }
  };

  useEffect(() => {
  });
  const statusColor = useMemo(() => {
    switch (issueObj?.issuestatuses[0]?.statusId) {
      case 1:
        return '#21EB95';

      case 2:
        return 'orange';

      case 3:
        return 'green';

      default:
        return 'transparent';
    }
  });

  return (

    <Card
      style={{
        width: '18rem', marginLeft: '5px', marginBottom: '5px', flexDirection: 'row',
      }}
      draggable={draggable}
      onDragStart={() => handleDrag(issueObj.issueId)}
      onDragEnd={() => {}}
    >
      <Card.Header style={{
        width: '10px',
        backgroundColor: statusColor,
        margin: '8px',
        padding: 0,
      }}
      />
      <Card.Body>
        <Card.Title>Issue: {issueObj?.issueId}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Title: {issueObj?.title}</Card.Subtitle>
        <Card.Text>
          Status: {issueObj?.issuestatuses[0]?.status.statusName}
        </Card.Text>
        <Button href={`/issues/view/${issueObj?.issueId}`} variant="contained">View</Button> <DeleteIcon className="delete-icon" color="secondary" onClick={deleteThisIssue} />
      </Card.Body>
    </Card>
  );
}

IssueCard.propTypes = {
  issueObj: PropTypes.shape({
    issueId: PropTypes.number,
    title: PropTypes.string,
    status: PropTypes.string,
    statusName: PropTypes.string,
    dateTimeCreated: PropTypes.instanceOf(Date),
    // eslint-disable-next-line react/forbid-prop-types
    issuestatuses: PropTypes.array,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,

};

export default IssueCard;
