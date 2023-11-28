import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { createIssue, updateIssue } from '../api/IssueData';

const initialState = {
  title: '',
  description: '',
  status: 'New',
};

function CreateIssueForm({ obj }) {
  const [formData, setFormData] = useState([]);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj?.issueId) {
      updateIssue(obj?.issueId, formData).then(() => router.push('/issues/viewissues'));
    } else {
      const payload = { ...formData, statusId: 1 };

      createIssue(payload).then(() => router.push('/issues/viewissues'));
    }
  };

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
        statusId: obj?.statusId,
      }));
    }
  }, [obj]);
  return (
    <>

      <Form onSubmit={handleSubmit}>
        <Form.Select aria-label="Default select example">
          <option>Select Status</option>
          <option value={formData?.status?.statusId}>1</option>
          <option value={formData?.status?.statusId}>2</option>
          <option value={formData?.status?.statusId}>3</option>
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

        <Button type="submit">{obj?.issueId ? 'Update' : 'Create'} Issue</Button>
      </Form>
    </>
  );
}

CreateIssueForm.propTypes = {
  obj: PropTypes.shape({
    issueId: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    statusId: PropTypes.number,
  }),
};

CreateIssueForm.defaultProps = {
  obj: initialState,
};

export default CreateIssueForm;
