import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { createIssue, updateIssue } from '../api/IssueData';

function CreateIssueForm({ obj }) {
  const [formData, setFormData] = useState();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj?.issueId) {
      updateIssue(formData).then(() => router.push('/issues/IssuesPage'));
    } else {
      const payload = { ...formData };
      createIssue(payload).then(() => router.push('/issues/IssuesPage'));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Issue Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Issue Title"
          name="title"
          value={formData?.title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Description"
          name="description"
          value={formData?.description}
          onChange={handleChange}
        />
      </Form.Group>
      <Button type="submit">Submit Issue</Button>
    </Form>
  );
}

CreateIssueForm.propTypes = {
  obj: PropTypes.shape({
    issueId: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
export default CreateIssueForm;
