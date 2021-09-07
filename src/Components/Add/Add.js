import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import './Add.css'
import { Button } from '@material-ui/core';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Add({addMovie}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [newMovie, setNewMovie] = useState({})

  const handelChange=(e)=>setNewMovie({...newMovie, [e.target.name] : e.target.value})
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <form style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Add Movie</h2>

<TextField className='TextFieldC'
          id="outlined-textarea"
          label="Name"
          name='name'
          placeholder="Placeholder"
          multiline
          variant="outlined"
          onChange={(e)=>handelChange(e)}
        />

<TextField className='TextFieldC'
          id="outlined-textarea"
          label="Date"
          name='date'
          placeholder="Placeholder"
          multiline
          variant="outlined"
          onChange={(e)=>handelChange(e)}
        />

<TextField className='TextFieldC'
          id="outlined-textarea"
          label="Type"
          name='type'
          placeholder="Placeholder"
          multiline
          variant="outlined"
          onChange={(e)=>handelChange(e)}
        />

<TextField className='TextFieldC'
          id="outlined-textarea"
          label="Description"
          name='description'
          placeholder="Placeholder"
          multiline
          variant="outlined"
          onChange={(e)=>handelChange(e)}
        />

<TextField className='TextFieldC'
          id="outlined-textarea"
          label="Image"
          name='image'
          placeholder="Placeholder"
          multiline
          variant="outlined"
          onChange={(e)=>handelChange(e)}
        />


<TextField className='TextFieldC'
          id="outlined-number"
          label="Rating"
          name='rating'
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={(e)=>handelChange(e)}
        />

        <Button className='TextFieldC' onClick={(e)=>{e.preventDefault(); addMovie(newMovie);handleClose();}}> Submit </Button>
    </form>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
