import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function CreateButton() {
  return (
    <div>
      <Fab color="primary" aria-label="add" className="mb-3 mt-3">
        <AddIcon />
      </Fab>
    </div>
  );
}

export default CreateButton;
