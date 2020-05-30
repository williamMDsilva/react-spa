import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';

import {Auth} from './repository/UserRepository';

const classes = {
    paper: {
        //marginTop: theme.spacing(8),
        display: 'flex',
        height: '80vh',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        overflowX: 'hidden',
        overflowY: 'auto',
    },
    avatar: {
        //margin: theme.spacing(1),
        //backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        //marginTop: theme.spacing(1),
    },
    submit: {
        //margin: theme.spacing(3, 0, 2),
    },
    card:{
        // margin: '0',
        // position: 'absolute',
        // top: '50%',
    }
}

function handleHttpError (e){
    console.log(e);
}

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();

    return (
        <Container component="main" maxWidth="xs" style={{}}>
            <div style={classes.paper}>
                <div className={classes.card}>
                    <Typography component="h1" variant="h5">
                        ConcertMaster
                </Typography>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={e => setPassword(e.target.value)}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        //className={classes.submit}
                        onClick={(event) => {
                            event.preventDefault();
                            
                            Auth(email, password)
                                .then(({ data: user }) => {
                                    localStorage.setItem('token', user.token);
                                    localStorage.setItem('name', user.name);
                                    history.push("/dashboard");

                                }).catch(handleHttpError);
                        }}>
                        Entrar
                    </Button>
                </div>
            </div>
            <Box mt={8}>
                {/* <Copyright /> */}
            </Box>
        </Container>
    );
}