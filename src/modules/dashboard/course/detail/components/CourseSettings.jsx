import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import {
    fade,
    makeStyles,
} from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import { UseCourse } from '../../hooks/CourseHook';

function CardForm({ courseId }) {
    const classes = useStyles();
    const [course, loading, setCourse, setLoading] = UseCourse(courseId);

    const handleChange = (event) => {
        setCourse(course.setEntity({ ...course, [event.target.name]: event.target.value }))
        console.log(event);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        // Post da API
        // setLoading({ loading: false });
    }

    if (!loading) {
        return (
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.pos} color="textSecondary">Configuração do curso </Typography>
                        <FormControl className={classes.conteiner}>
                            <Grid container spacing={3}>
                                <Grid item xs={6}>

                                    <TextField
                                        className={classes.input}
                                        required
                                        variant="outlined"
                                        label="Nome do curso"
                                        value={course.name}
                                        id="course-input-name"
                                        name="name"
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <TextField
                                        className={classes.input}
                                        required
                                        variant="outlined"
                                        label="Categoria do curso"
                                        value={course.category}
                                        id="course-input-category"
                                        name="category"
                                        onChange={handleChange}
                                    />
                                </Grid>
                            </Grid>
                            <TextField
                                className={classes.input}
                                required
                                variant="outlined"
                                label="Descrição do curso"
                                value={course.description}
                                id="course-input-description"
                                name="description"
                                onChange={handleChange}
                            />
                            <TextField
                                className={classes.input}
                                required
                                variant="outlined"
                                label="Autor do curso"
                                value={course.author}
                                id="course-input-author"
                                name="author"
                                onChange={handleChange}
                            />

                            <TextField
                                className={classes.input}
                                required
                                variant="outlined"
                                label="Cor do card"
                                value={course.color}
                                id="course-input-color"
                                name="color"
                                onChange={handleChange}
                            />
                        </FormControl>
                </CardContent>
                <CardActions>
                    <Button size="medium" color="primary" onClick={handleSubmit}>Salvar</Button>
                </CardActions>
            </Card>);
    }

    return (<Card className={classes.root}>
        <CardContent>
            <LinearProgress />
        </CardContent>
    </Card>
    );
}

export default function CourseSettings(props) {
    return (<CardForm {...props} />);
}

const useStyles = makeStyles((theme) => ({
    root: {
        border: '1px solid #e2e2e1',
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: '#fcfcfb',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
            backgroundColor: '#fff',
        },
        '&$focused': {
            backgroundColor: '#fff',
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main,
        },
    },
    focused: {},
    input: {
        width: '100%',
        marginTop: '24px',
    },
    conteiner: {
        width: '100%',
        flex: 1,
    },
}));