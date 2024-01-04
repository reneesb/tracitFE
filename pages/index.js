import {
  Button, Row, Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { signOut } from '../utils/auth';
// import { useAuth } from '../utils/context/authContext';

function Home() {
  // const { user } = useAuth();
  return (
    <>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '50vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <h1 style={{ color: '#8927E0' }}>TracIT</h1>
        <h3 style={{ color: '#36c5f4' }}>Issue Management System</h3>
        <p>Click the button below to logout!</p>
        <Button style={{ background: '#8927E0' }} type="button" size="lg" className="copy-btn" onClick={signOut}>
          Sign Out
        </Button>
      </div>
      <div>
        <Row className="text-center d-flex justify-content-center align-content-center">
          <hr />
          <Col>
            <h2 style={{ color: '#8927E0' }}>Chat Now for Support</h2>
            <FontAwesomeIcon icon={faComments} size="2xl" style={{ color: '#8927e0' }} />
            <h3 style={{ color: '#8927E0', marginTop: '3px' }}> We are available 24 hours per day</h3>
          </Col>
          <Col>
            <h2 style={{ color: '#8927E0' }}>Call Now for Support</h2>
            <FontAwesomeIcon icon={faMobileScreen} size="2xl" style={{ color: '#8927e0' }} />
            <h3 style={{ color: '#8927E0', marginTop: '3px' }}>1-888-555-1212</h3>
          </Col>
        </Row>

      </div>
    </>
  );
}

export default Home;
