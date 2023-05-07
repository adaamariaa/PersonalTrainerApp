import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddCustomer({ saveCustomer }) {
  const [open, setOpen] = useState(false);
  const [customer, setCustomer] = useState({
    firstname: '', lastname: '',streetaddress: '', postcode: '', city: '',
    email: '',
    phone: ''
  });

const handleChangeInput = event => {
  setCustomer({...customer, [event.target.name]: event.target.value});
};

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    saveCustomer(customer);
    setOpen(false);
  }



  return (
    <div>
      <Button size="small" variant="contained" color="secondary" onClick={handleClickOpen}>
        Add customer
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add customer</DialogTitle>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            name="firstname"
            label="Firstname"
            type="text"
            fullWidth
            variant="standard"
            onChange={event => handleChangeInput(event)}
            value={customer.firstname}
          />
          <TextField
            margin="dense"
            name="lastname"
            label="Lastname"
            type="text"
            fullWidth
            variant="standard"
            onChange={event => handleChangeInput(event)}
            value={customer.lastname}
          />
          <TextField
            margin="dense"
            name="streetaddress"
            label="Streetaddress"
            type="text"
            fullWidth
            variant="standard"
            onChange={event => handleChangeInput(event)}
            value={customer.streetaddress}
          />
          <TextField
            margin="dense"
            name="postcode"
            label="Postcode"
            type="number"
            fullWidth
            variant="standard"
            onChange={event => handleChangeInput(event)}
            value={customer.postcode}
          />
          <TextField
            margin="dense"
            name="city"
            label="City"
            type="Text"
            fullWidth
            variant="standard"
            onChange={event => handleChangeInput(event)}
            value={customer.city}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="text"
            fullWidth
            variant="standard"
            onChange={event => handleChangeInput(event)}
            value={customer.email}
          />
            <TextField
            margin="dense"
            name="phone"
            label="Phone"
            type="text"
            fullWidth
            variant="standard"
            onChange={event => handleChangeInput(event)}
            value={customer.phone}
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