import React from 'react';

import { Link, Typography, withStyles } from '@material-ui/core';

const Footer = props => (
    <footer {...props} className={props.classes.root}>
        <Typography>
            {Lang.get('navigation.citation')}{' '}
            <Link
                href="https://github.com/velnae/10-principios-jakob-nielsen"
                target="_blank"
                rel="noreferrer"
            >
                Grupo Rayones - Github
            </Link>
        </Typography>
    </footer>
);

const styles = theme => ({
    root: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        left: 0,
        padding: theme.spacing.unit * 4,
        textAlign: 'center',
    },
});

export default withStyles(styles)(Footer);
