import { clientCredentials } from '../utils/client';

// Create Issue
const createIssue = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/api/issue?statusId=1`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(async (res) => {
      let data;
      if (res.ok) {
        data = await res;
        resolve(data);
      }
    })
    .catch(reject);
});

// Update Issue
const updateIssue = (issueId, payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/api/issue/${issueId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(resolve)
    .catch(reject);
});

// Update issuestatus(make entry into issuestatus join table)
const updateIssueStatus = (issueId, payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/api/issueStatus`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ issueId, statusId: payload }),
  })
    .then(resolve)
    .catch(reject);
});

// Update IssueUser
const updateIssueUser = (issueId, payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/api/issueUser/${issueId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(resolve)
    .catch(reject);
});

// Get all issues
const getAllIssues = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/api/issue`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

// Get single issue
const getSingleIssue = (issueId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/api/issue/${issueId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      resolve((data));
    })
    .catch(reject);
});

// Delete an Issue
const deleteIssue = (issueId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/api/issue/${issueId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// Get Issue Comments by Id
const getSingleIssueComment = (issueId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/api/issuecomments/${issueId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      resolve((data));
    })
    .catch(reject);
});

// Create issuecomments(make entry into issuecomments join table)
const createIssueComment = (issueId, payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/api/issuecomments/${issueId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(resolve)
    .catch(reject);
});

export {
  createIssue,
  updateIssue,
  getAllIssues,
  deleteIssue,
  getSingleIssue,
  updateIssueUser,
  updateIssueStatus,
  getSingleIssueComment,
  createIssueComment,
};
