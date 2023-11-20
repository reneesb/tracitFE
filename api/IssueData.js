import { clientCredentials } from '../utils/client';

// CREATE BOOKING
const createIssue = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/api./issue`, {
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
        data = await res.json();
        resolve(data);
      }
    })
    .catch(reject);
});

export default createIssue;
