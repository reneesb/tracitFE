/* eslint-disable react/prop-types */
import Link from 'next/link';
import Card from 'react-bootstrap';

function DragAndDropCard({ issueObj, handleDrag, issueId }) {
  return (
    <div
      draggable
      onDragStart={(e) => handleDrag(e, issueId)}
      onDragEnd={(e) => {
        e.target.closest().style.backgroundColor = '#bbbbbb';
        setTimeout(
          () => (e.target.closest().style.backgroundColor = '#ffffff'),
          1200,
        );
      }}

    >
      <Card style={{ width: '18rem' }}>
        <div>
          <h2>{issueObj?.issueId}</h2>
          <h3 className="mb-2 text-muted">{issueObj?.title}</h3>
          <Link href="#">View</Link>
          <Link href="#">Delete</Link>
        </div>
      </Card>
    </div>
  );
}

export default DragAndDropCard;
