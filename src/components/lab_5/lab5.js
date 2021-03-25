import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import styles from '../../styles/scss/lab5.module.css'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Lab5() {
    //1 block
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    //2 block
    const [open_1, setOpen_1] = React.useState(false);
    const handleClickOpen_1 = () => {
        setOpen_1(true);
    };
    const handleClose_1 = () => {
        setOpen_1(false);
    };
    //3 block
    const [open_2, setOpen_2] = React.useState(false);
    const handleClickOpen_2 = () => {
        setOpen_2(true);
    };
    const handleClose_2 = () => {
        setOpen_2(false);
    };
    //4 block
    const [open_3, setOpen_3] = React.useState(false);
    const handleClickOpen_3 = () => {
        setOpen_3(true);
    };
    const handleClose_3 = () => {
        setOpen_3(false);
    };

    return (
        <div className={styles.main_block}>
            <div>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Ok and cancel
                </Button>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"Dialog window #1"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Click one of the buttons:
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Ok
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
            <div>
                <Button variant="outlined" color="primary" onClick={handleClickOpen_1}>
                    Yes,no and cancel
                </Button>
                <Dialog
                    open={open_1}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose_1}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"Dialog window #2"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Yes, no and cancel
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose_1} color="primary">
                            Yes
                        </Button>
                        <Button onClick={handleClose_1} color="primary">
                            No
                        </Button>
                        <Button onClick={handleClose_1} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
            <div>
                <Button variant="outlined" color="primary" onClick={handleClickOpen_2}>
                    Retry and cancel
                </Button>
                <Dialog
                    open={open_2}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose_2}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"Dialog window #3"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Click on one of the buttons:
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose_2} color="primary">
                            Retry
                        </Button>
                        <Button onClick={handleClose_2} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
            <div>
                <Button variant="outlined" color="primary" onClick={handleClickOpen_3}>
                    Yes, no
                </Button>
                <Dialog
                    open={open_3}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose_3}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"Dialog window #4"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Click on one of the buttons
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose_3} color="primary">
                            Yes
                        </Button>
                        <Button onClick={handleClose_3} color="primary">
                            No
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}
