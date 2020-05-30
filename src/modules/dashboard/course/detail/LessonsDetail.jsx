import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { DropzoneArea } from 'material-ui-dropzone'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useLocation } from "react-router-dom";

import Lesson from '../models/Lesson';


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function handleChangeDropVideo(files) {
    console.log(files);
}

function handleChangeDropImage(files) {
    console.log(files);
}

export default function LessonDetail(props) {
    const { courseId, lessonId } = useParams();
    const query = useQuery();

    const classes = useStyles();

    const lessonBuilded = {
        id: lessonId,
        title: query.get("title"),
        description: query.get("description"),
        link: query.get("link"),
        thumbnail: query.get("thumbnail"),
        courseId,
    };

    const [lesson, setLesson] = useState(new Lesson(lessonBuilded));

    const handleChange = (event) => {
        setLesson(lesson.setEntity({ ...lesson, [event.target.name]: event.target.value }))
    }

    return (<div>
        <Grid container spacing={3}>

            <Grid item xs={12}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/" onClick={() => { }}>Home</Link>
                    <Typography color="textPrimary">Curso</Typography>
                    <Typography color="textPrimary">Aula</Typography>
                </Breadcrumbs>
            </Grid>

            <Grid item xs={6}>
                <TextField
                    className={classes.input}
                    required
                    variant="outlined"
                    label="Titulo da aula"
                    value={lesson.title}
                    id="course-input-title"
                    name="title"
                    onChange={handleChange}
                />
            </Grid>

            <Grid item xs={6}>
                <TextField
                    className={classes.input}
                    required
                    variant="outlined"
                    label="Descrição da Aula"
                    value={lesson.description}
                    id="course-input-description"
                    name="description"
                    onChange={handleChange}
                />
            </Grid>

            <Grid item xs={6}>
                <Typography variant="h6" noWrap>  Adicionar video </Typography>

                <DropzoneArea
                    onChange={handleChangeDropVideo}
                />
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h6" noWrap>  Adicionar Thumbnail </Typography>
                <DropzoneArea
                    onChange={handleChangeDropImage}
                />
            </Grid>

            <Grid item xs={6}>
                <Button variant="contained" color="secondary" onClick={() => {
                    setLesson(new Lesson({  title: '', description: '', courseId }));
                }}> Novo </Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" color="primary" onClick={() => { }}> Salvar </Button>
            </Grid>
        </Grid>


    </div>);
}

const useStyles = makeStyles((theme) => ({
    input: {
        width: '100%',
        marginTop: '24px',
    },
    conteiner: {
        width: '100%',
        flex: 1,
    },
}));