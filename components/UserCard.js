import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function UserCard({ userObj }) {
  return (
    <div>
      <Card style={{ width: '18rem' }} className="user-card">
        <Card.Img variant="top" src={userObj?.imageUrl} />
        <Card.Body>
          <Card.Title>{userObj?.firstName} {userObj?.lastName}</Card.Title>
          <Card.Text>
            <p>{userObj?.userRole}</p>
          </Card.Text>
          <Button variant="primary">Assign</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

UserCard.propTypes = {
  userObj: PropTypes.shape({
    imageUrl: PropTypes.string,
    Uid: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    userRole: PropTypes.string,
  }).isRequired,
};

export default UserCard;
