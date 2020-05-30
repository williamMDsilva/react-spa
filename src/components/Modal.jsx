import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  return {
    border: 0,
    width: '100%',
    height: '100vh'
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "80%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal({children, open, handleClose, title, description}) {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >

        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">{title}</h2>
            <p id="simple-modal-description">{description}</p>
            <div>{children}</div>
        </div>
      </Modal>
    </div>
  );
}
