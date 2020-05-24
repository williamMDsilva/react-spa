import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Home, Book, People, ExitToApp } from '@material-ui/icons';

import {
    Switch,
    useHistory,
    useParams,
} from "react-router-dom";

import routes from './routes.js';

import routerMapper from '../../shared/libs/RouterMapper.js';

const MENU = [
    {
        to: '/dashboard/',
        name: 'Home',
        icon: 'Home',
        exact: true,
    }, {
        to: '/dashboard/courses',
        name: 'Cursos',
        icon: 'Book'
    },
    {
        to: '/dashboard/users',
        name: 'Usuarios',
        icon: 'People'
    },
];

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function Dashboard() {
    const classes = useStyles();
    const history = useHistory();
    const { slug } = useParams();


    const mapIcon = {
        "Home": <Home />,
        "Book": <Book />,
        "People": <People />,
        "out": <ExitToApp />
    }

    function handleClick(to) {
        history.push(to);
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Concert Master
          </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        {MENU.map((item, index) => (
                            <ListItem button key={item.name} onClick={() => {
                                handleClick(item.to)
                            }}>
                                <ListItemIcon>{mapIcon[item.icon]}</ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItem>
                        ))}
                        <ListItem button key={"LogOut"} onClick={() => { 
                              localStorage.removeItem('token');
                              localStorage.removeItem('name');
                              history.push("/");                              
                        }}>
                            <ListItemIcon>{mapIcon["out"]}</ListItemIcon>
                            <ListItemText primary={"Sair"} />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
                <Switch>
                    {routerMapper(routes, true)}
                </Switch>
            </main>
        </div >
    );
}