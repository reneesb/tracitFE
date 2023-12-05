import { clientCredentials } from '../utils/client';

// Create Issue
const createIssueStatus = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/api/issueStatus`, {
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

// Get status by Id
const getStatus = (statusId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/api/issue/${statusId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

export {
  createIssueStatus,
  getStatus,
};
