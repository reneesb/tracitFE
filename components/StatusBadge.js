import React from 'react';
import Badge from 'react-bootstrap/Badge';

const statusList = [
  { statusId: 1, statusName: 'New', isCurrentStatus: true },
  { statusId: 2, statusName: 'In-Progress', isCurrentStatus: false },
  { statusId: 3, statusName: 'Closed', isCurrentStatus: false },
];

function StatusBadge() {
  return (
    <div>
      {statusList.map((statusName) => (
        <Badge key={statusList.statusName} pill statusObj={statusName} />
      ))}
    </div>
  );
}

export default StatusBadge;
