import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Grid, Paper} from '@material-ui/core';
import boxImage from '../../../img/box.png';
import { AppContext } from '../../AppContext';

const styles = theme => ({
    titleWelcome: {
        display: 'block',
    },
    root: {
        ...theme.mixins.gutters(),
        minWidth: 275,
        width: '100%',
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    divGrid: {
        flexGrow: 1,
    },
    boxImage: {
        width: '80%',
    }
});

function HomeContent(props) {
    const {classes} = props;
    const { user } = useContext(AppContext);
    return (
        <>
            <Typography className={classes.titleWelcome} variant="h5" gutterBottom>
                Bienvenido {user.name}
            </Typography>
            <Paper className={classes.root} elevation={1}>
                <div className={classes.root}>
                    <Grid container>
                        <Grid item xs={12} md={3}>
                            <img className={classes.boxImage} src={boxImage} alt="image box"/>
                        </Grid>
                        <Grid item xs={12} md={9} style={{paddingTop: 10}}>
                            <Typography variant="h6">
                                Empecemos!
                            </Typography>
                            <Typography component="p">
                                Bienvenido al sistema de gestión de usuarios para el UNAMBA Pagos, desde aqui podras
                                facilmente agregar, editar, eliminar y hasta recuperar usuarios para la gestión del
                                sistema, ademas, si tienes dudas u olvidas como se hace, puedes hacer click en el boton
                                de ayuda para que te recuerde los pasos de como funciona esta aplicación
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </Paper>
        </>
    );
}

HomeContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeContent);
