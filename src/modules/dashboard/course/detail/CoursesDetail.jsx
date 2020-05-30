
import React from 'react';
import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import CourseSettings from './components/CourseSettings.jsx';
import LessonList from './components/LessonList.jsx';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    details: {
        width: '100%'
    }
}));

export default function CoursesDetail() {
    let { id } = useParams();
    const classes = useStyles();

    return (<div>
        <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={() => { }}>Home</Link>
            <Typography color="inherit">Curso</Typography>
            <Typography color="textPrimary">{id}</Typography>
        </Breadcrumbs>
        <br />
        <CourseSettings courseId={id} />
        <br />

        <ExpansionPanel>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
            >
                <Typography className={classes.heading}>Aulas</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>

                <LessonList courseId={id}/>
                
            </ExpansionPanelDetails>
        </ExpansionPanel>
        
        <ExpansionPanel disabled>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
            >
                <Typography className={classes.heading}>Materiais do curso</Typography>
            </ExpansionPanelSummary>
        </ExpansionPanel>
    </div>);
}