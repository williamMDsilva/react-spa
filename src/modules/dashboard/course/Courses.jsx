import React from 'react';

import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { Button } from '@material-ui/core';

import CoursesTable from './components/CoursesTable.jsx';
import SimpleModal from "../../../components/Modal";

export default function Courses() {
    const [open, setOpen] = React.useState(false);

    const handleModalOpen = () => {
        setOpen(true);
    };
    const handleModalClose = () => {
        setOpen(false);
    };

    return (<div>
        <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={() => { }}>Home</Link>
            <Typography color="textPrimary">Cursos</Typography>
        </Breadcrumbs>
        <Button variant="contained" color="primary" onClick={handleModalOpen}>
            Novo
        </Button>
        <br />
        <br />
        <SimpleModal open={open} handleClose={handleModalClose} title="Text in a modal" description="Duis mollis, est non commodo luctus, nisi erat porttitor ligula.">

        </SimpleModal>
        <br />
        <CoursesTable />
    </div>);
}
