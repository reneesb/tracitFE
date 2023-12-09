import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import getAllUsers from '../api/UserData';
import { updateIssueUser } from '../api/IssueData';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName?.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme?.typography.fontWeightMedium,
  };
}

// eslint-disable-next-line react/prop-types
export default function AssignUser({ issueUser, issueId, updateIssueUsers }) {
  console.log('issueId', issueId);
  console.log('issueUser', issueUser);

  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [users, setUsers] = useState([]);

  const getAssignedUsers = () => {
    // eslint-disable-next-line react/destructuring-assignment
    const assignees = [];
    // eslint-disable-next-line react/prop-types
    for (let i = 0; i < issueUser?.length; i++) {
      console.log('i', i);
      // eslint-disable-next-line react/prop-types
      assignees.push(issueUser[i]?.userId);
    }
    console.log('assignees', assignees);

    setPersonName(assignees);
  };

  useEffect(() => {
    getAllUsers().then(setUsers);
    if (issueUser !== undefined) {
      getAssignedUsers();
    }
  }, []);

  const handleChange = async (event) => {
    const {
      target: { value },
    } = event;

    // On autofill we get a stringified value.
    const assigneeVal = typeof value === 'string' ? value.split(',') : value;
    setPersonName(
      assigneeVal,
    );
    console.log('value', assigneeVal);
    if (assigneeVal.length > 0) {
      const assignees = [];

      for (let i = 0; i < assigneeVal.length; i++) {
        // eslint-disable-next-line object-shorthand
        assignees.push({ issueId: issueId, userId: assigneeVal[i] });
      }
      console.log('assignees', assignees);

      await updateIssueUser(issueId, assignees).then(() => updateIssueUsers());
    }
  };

  return (
    <div className="assign-user">
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Team</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {users.map((user) => (
            <MenuItem
              key={user.userId}
              value={user.userId}
              style={getStyles(theme)}
            >
              {user?.firstName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
