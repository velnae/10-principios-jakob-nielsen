import React from 'react';
import { Typography } from '@material-ui/core';

import { Master as MasterLayout } from './layouts';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
//import Typography from '@material-ui/core/Typography';

const Usuario = () => {
    // 👇️ navigate to /contacts
    navigate('/#/resources/users');
  };


const styles = {
    card: {
      //minWidth: 275,
      width: '100%',
      height: '500px',
      backgroundPosition: "65% 50%",
      backgroundRepeat: "no-repeat",
	  //backgroundPosition: "center center",
	  backgroundSize: "cover",
	  //backgroundAttachment: "fixed",
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://www.unamba.edu.pe/media/k2/items/cache/2ec788b5d2483f73e1f9efd1de8baaf4_XL.jpg')`,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      //fontSize: 14,
      //margin: '40px',
      marginTop: 280,
    },
    pos: {
      marginBottom: 12,
    },
  };

function Home(props) {

    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;

    const primaryAction = {
        text: 'Export Stats',
        clicked: () => alert('Exporting your awesome stats...'),
    };

    const tabs = [
        {
            name: 'Overview',
            active: true,
        },

        {
            name: 'Monthly',
            active: false,
        },
    ];


    return (
        <MasterLayout
            {...props}
            pageTitle={Lang.get('navigation.dashboard')}
            primaryAction={primaryAction}
            tabs={tabs}
        >
            

            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} variant="h5"  component="h2"  color="textSecondary" gutterBottom>
                    bienvenidos al panel de administración de UNAMBA
                    </Typography>
                    <Typography component="p">
                    Pagos electrónicos - UNAMBA.
                    <br />
                    {'"Desde tu PC o Smartphone - Usa UNAMBA-Pagos donde quieras, cuando quieras."'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" onClick={Usuario}>
                        Gestión de Usario
                    </Button>
                </CardActions>
            </Card>

        </MasterLayout>
    );
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Home);
