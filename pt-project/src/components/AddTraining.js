import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddTraining( props ) {
  const [open, setOpen] = useState(false);
  const [training, setTraining] = useState({
    date: '',
    duration: '',
    activity: '',
    customer: (props.customer.links[0].href)
  });

const handleChangeInput = event => {
  setTraining({...training, [event.target.name]: event.target.value});
};

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    props.saveTraining(training);
    setOpen(false);
  }



  return (
    <div>
      <Button variant="text" color="secondary" onClick={handleClickOpen}>
        Add training
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add training</DialogTitle>
        <DialogContent>
        <TextField
            margin="dense"
            name="date"
            label="Date"
            type="datetime-local"
            fullWidth
            variant="standard"
            onChange={event => handleChangeInput(event)}
            value={training.date}
          />
          <TextField
            margin="dense"
            name="activity"
            label="Activity"
            type="text"
            fullWidth
            variant="standard"
            onChange={event => handleChangeInput(event)}
            value={training.activity}
          />
          <TextField
            margin="dense"
            name="duration"
            label="Duration"
            type="number"
            fullWidth
            variant="standard"
            onChange={event => handleChangeInput(event)}
            value={training.duration}
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}