import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

function UserCard({ userObj }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={userObj?.imageUrl} />
      <Card.Body>
        <Card.Title>{userObj?.firstName} {userObj?.lastName}</Card.Title>
        <Card.Text>
          <p>{userObj?.userRole}</p>
        </Card.Text>
        <Button variant="primary" style={{ backgroundColor: '#8927E0' }}>Delete</Button>
      </Card.Body>
    </Card>
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
