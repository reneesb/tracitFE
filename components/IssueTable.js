import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import {
  MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody,
} from 'mdb-react-ui-kit';

export default function IssueTable({ issueObj }) {
  return (

    <MDBTable align="middle">
      <MDBTableHead>
        <tr>
          <th scope="col">Owner</th>
          <th scope="col">Issue ID</th>
          <th scope="col">Title</th>
          <th scope="col">Status</th>
          <th scope="col">Created</th>
          <th scope="col">Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr key={issueObj?.issueId}>
          <td>
            <div className="d-flex align-items-center">
              <img
                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                alt=""
                style={{ width: '45px', height: '45px' }}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">John Doe</p>
                <p className="text-muted mb-0">Software Engineer</p>
              </div>
            </div>
          </td>
          <td>
            {issueObj?.issueId}
          </td>
          <td>
            {issueObj?.title}
          </td>
          <td>

            <MDBBadge color="primary" pill>
              {issueObj?.status}
            </MDBBadge>
          </td>
          <td>
            {issueObj?.dateTimeCreated}
          </td>
          <td>
            <Link href={`/issues/edit/${issueObj.issueId}`}>
              <MDBBtn color="link" rounded size="sm">
                Edit
              </MDBBtn>
            </Link>
          </td>
        </tr>

      </MDBTableBody>
    </MDBTable>
  );
}

IssueTable.propTypes = {
  issueObj: PropTypes.shape({
    issueId: PropTypes.number,
    title: PropTypes.string,
    status: PropTypes.string,
    dateTimeCreated: PropTypes.instanceOf(Date),
  }).isRequired,

};
