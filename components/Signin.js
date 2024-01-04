import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        margin: '0 auto',
        zIndex: 1,
        minHeight: '25rem',
        width: '100%',
        minWidth: '30rem',
        paddingBlock: '0 5rem',
      }}
    >
      <h1 style={{ color: '#8927E0' }}>TracIT</h1>
      <h3 style={{ color: '#36c5f4' }}>Issue Management System</h3>
      <p>Click the button below to login!</p>
      <Button type="button" size="lg" className="copy-btn" onClick={signIn} style={{ background: '#8927E0' }}>
        Sign In
      </Button>
    </div>
  );
}

export default Signin;
