import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { createIssue, updateIssue } from '../api/IssueData';

const statusList = [
  { statusId: 1, statusName: 'New' },
  { statusId: 2, statusName: 'In-Progress' },
  { statusId: 3, statusName: 'Closed' },
];

function CreateIssueForm({ obj }) {
  const [formData, setFormData] = useState({ dateTimeCreated: new Date(), title: '', description: '' });
  const router = useRouter();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(formData);
    if (obj?.issueId) {
      updateIssue(obj?.issueId, formData).then(() => router.push('/issues/viewissues')).catch((err) => console.log(err));
    } else {
      const payload = { ...formData };

      createIssue(payload).then(() => router.push('/issues/viewissues')).catch((err) => console.log(err));
    }
  }, [formData, obj?.issueId, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (obj?.issueId) {
      setFormData((prev) => ({
        ...prev,
        title: obj?.title,
        description: obj?.description,
      }));
    }
  }, [obj]);
  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Select name="statusId" onChange={handleChange} value={formData.statusId}>
            {statusList.map((item) => <option key={item.statusName} value={item.statusName}>{item.statusName}</option>)}
          </Form.Select>

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
          <Form.Control type="hidden" value={formData?.dateTimeCreated === undefined ? new Date() : formData?.dateTimeCreated} name="Created" />

          <Button type="submit">{obj?.issueId ? 'Update' : 'Create'} Issue</Button>
        </Form>
      </Container>
    </>
  );
}

CreateIssueForm.propTypes = {
  obj: PropTypes.shape({
    issueId: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    statusId: PropTypes.number,
  }).isRequired,
};

export default CreateIssueForm;
