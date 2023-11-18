import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

function CreateIssueForm() {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Issue Title</Form.Label>
          <Form.Control type="text" placeholder="Issue Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="descriptionTextArea">
          <Form.Label>Issue Description</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
      </Form>
      <Button color="violet">Submit</Button>
    </Container>
  );
}

export default CreateIssueForm;
