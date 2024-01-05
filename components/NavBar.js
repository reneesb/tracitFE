import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

function NavBar() {
  const { user } = useAuth();
  return (
    <Navbar className="nav">
      <Container>
        <Navbar.Brand href="/" style={{ color: '#8927E0' }}>TracIT</Navbar.Brand>
        {/* <Navbar.Toggle /> */}
        <Navbar.Collapse>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/issues/viewissues">List View</Nav.Link>
          <Nav.Link href="/issues/viewboard">Board View</Nav.Link>
          <Nav.Link href="/projectteam">Project Team</Nav.Link>
          <div className="nav-end">
            <Navbar.Text>
              Signed in as: {user.fbUser.displayName}
            </Navbar.Text>

            <Navbar.Text>
              <Button onClick={signOut} className="signout-btn" style={{ backgroundColor: '#8927E0' }}>Sign Out</Button>
            </Navbar.Text>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
