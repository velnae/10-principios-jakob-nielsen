import React, {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import {AppBar, CircularProgress, CssBaseline, Grid, Hidden, withStyles,} from '@material-ui/core';

import {Breadcrumbs, Modal, Snackbar} from '../../../ui';
import {LinearDeterminate} from '../../../ui/Loaders';
import {Footer, Header, Sidebar} from '../partials';
import {AppContext} from '../../../AppContext';
import {Steps} from 'intro.js-react';
import 'intro.js/introjs.css';

function Master(props) {
    const [minimized, setMinimized] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [localeMenuOpen, setLocaleMenuOpen] = useState(false);
    const [accountMenuOpen, setAccountMenuOpen] = useState(false);

    /**
     * Called when a nav link menu is clicked.
     *
     * @param {function} set The callback function to be called
     * @param {string} indicator The flag that will be toggled
     *
     * @return {undefined}
     */
    const handleNavLinkMenuToggled = (set, indicator) => {
        setLocaleMenuOpen(false);
        setAccountMenuOpen(false);
        setMobileOpen(false);

        set(!indicator);
    };

    /**
     * Toggles Locale Menu
     *
     * @return {undefined}
     */
    const handleLocaleMenuToggled = () => {
        handleNavLinkMenuToggled(setLocaleMenuOpen, localeMenuOpen);
    };

    /**
     * Toggles Account Menu
     *
     * @return {undefined}
     */
    const handleAccountMenuToggled = () => {
        handleNavLinkMenuToggled(setAccountMenuOpen, accountMenuOpen);
    };

    /**
     * Called when mobile drawer button is clicked.
     *
     * @return {undefined}
     */
    const handleDrawerToggled = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        //
    });

    const {nightMode} = useContext(AppContext);

    const {classes, showBreadcrumbs, ...other} = props;

    const {
        children,
        history,
        location,
        pageTitle,
        loading,
        message,
        alert,
    } = props;

    const renderLoading = (
        <Grid
            container
            className={classes.loadingContainer}
            justify="center"
            alignItems="center"
        >
            <Grid item>
                <CircularProgress color="primary"/>
            </Grid>
        </Grid>
    );

    const renderBreadcrumbs = (
        <AppBar
            component="div"
            color="inherit"
            position="static"
            elevation={0}
            className={classes.breadcrumbBar}
            style={{
                backgroundColor: nightMode ? '#303030' : '#FAFAFA',
            }}
        >
            <div className={classes.breadcrumbWrapper}>
                <Breadcrumbs
                    segments={location.pathname
                        .split('/')
                        .splice(1)
                        .filter(segment => segment.length > 0)}
                    blacklistedSegments={['resources', 'analytics']}
                />
            </div>
        </AppBar>
    );

    const [stepsEnabled, setStepsEnabled] = useState(() => {
        const saved = localStorage.getItem('stepsEnabled');
        const status = saved || 1;
        return Boolean(Number(status));
    });

    localStorage.setItem('stepsEnabled', '0');

    const [initialStep, setInitialStep] = useState(0);
    const [steps, setSteps] = useState(() => {
        let steps_ = [];
        switch (location.pathname) {
            case '/':
                steps_ = [
                    {
                        element: '.anyselector',
                        intro: 'Bienvenido al guia de uso, has click en siguiente para poder guiarte'
                    },
                    {
                        element: '#root > div > div > div:nth-child(2) > div > div > div:nth-child(2) > button',
                        intro: 'Desde aquí podrás volver a mostrar esta Ayuda',
                    },
                    {
                        element: '#root > div > div > header > div > div > div:nth-child(3) button',
                        intro: 'Puedes cambiar a modo nocturno los colores de la interfaz, haciendo click aquí.',
                    },
                    {
                        element: '#root > div > nav > div > div > div > div > div > ul > div',
                        intro: 'Actualmente nos encontramos aqui el panel de bienvenida, el menu activo se muestra de color diferente al resto',
                    },
                    {
                        element: '#root > div > nav > div > div > div > div > div > ul > ul > div:nth-child(1)',
                        intro: 'Menu de recurso, desde aquí podrás acceder a la gestión de las opciones que se muestran adentro',
                    },
                    {
                        element: '#root > div > nav > div > div > div > div > div > ul > ul > div:nth-child(3)',
                        intro: 'Menu de Reportes, desde aqui podras acceder a los futuros reportes que se crearan',
                    },
                    {
                        element: '#root > div > div div nav',
                        intro: 'Puedes mirar aqui, para saber en que lugar de la aplicación de encuentras',
                    },
                    {
                        element: '#root > div > div > div:nth-child(2) > div > div > div:nth-child(2) > button',
                        intro: 'Eso es todo en esta interfaz, no olvides donde encontrarme.<br><br> si entras a otro menú, la ayuda te mostrara los pasos de esa opción'
                    },
                ];
                break;
            case '/resources/users':
                steps_ = [
                    {
                        element: '#root > div > div > div:nth-child(2) > div > div > div:nth-child(2)',
                        intro: 'Para agregar nuevos usuarios puedes hacer click aquí!',
                    },
                    {
                        element: '#root > div > div > main > div > div > div > table tbody',
                        intro: 'Esta es la tabla de usuarios, desde donde podrás agregar, editar, eliminar y filtrar con diferentes condiciones'
                    },
                    {
                        element: '#root > div > div > main > div > div > div > table tfoot tr td div',
                        intro: 'Aqui podras ver, cuantas resultados se obutvo en la actual lista, y poder moverte entre las paginas de resultados y la cantidad de resultados por pagina',
                    },
                    {
                        element: '#root > div > div > main > div > div > div > table tbody tr:nth-child(2)',
                        intro: 'Para editar, debes ubicarte en el icono del lapiz ✏️, a la altura del usuario que deseas editar.<br><br> Para eliminarlo debes ubicarte en el icono 🗑️',
                    },
                    {
                        element: '#root > div > div > main > div > div  div button',
                        intro: 'Finalmente para poder filtrar los resultados, puedes jugar con las diferentes opciones que te muestra, haciendo click aquí'
                    },
                ];
                break;
            default:
                steps_ = [
                    {
                        element: '.anyselector',
                        intro: 'No se tiene una guia para esta interfaz aun, pronto se agregara 😀'
                    },
                ];
                break;
        }
        return steps_;
    });
    const onExit = () => {
        setStepsEnabled(false);
    };

    const activateStepsGuide = () => {
        setStepsEnabled(true);
    };

    return (
        <>
            {loading && <LinearDeterminate className={classes.loader}/>}

            <Steps
                enabled={stepsEnabled}
                steps={steps}
                ref={(ref) => {
                    steps.current = ref;
                }}
                initialStep={initialStep}
                onExit={onExit}
                onBeforeChange={(nextStepIndex) => {
                    if (nextStepIndex > 0) {
                        steps.current.updateStepElement(nextStepIndex);
                    }
                }}
                options={{
                    nextLabel: 'Siguiente',
                    prevLabel: 'Anterior',
                    doneLabel: 'Terminar',
                    showProgress: true,
                    showBullets: false,
                    showStepNumbers: false
                }}
            />

            <div className={classes.root}>
                <CssBaseline/>

                <nav
                    className={classNames(classes.drawer, {
                        [classes.minimized]: minimized,
                    })}
                >
                    <Hidden smUp implementation="js">
                        <Sidebar
                            {...other}
                            loading={loading}
                            navigate={path => history.push(path)}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggled}
                            PaperProps={{style: {width: drawerWidth}}}
                        />
                    </Hidden>

                    <Hidden xsDown implementation="css">
                        <Sidebar
                            {...other}
                            loading={loading}
                            navigate={path => history.push(path)}
                            minimized={minimized}
                            setMinimized={setMinimized}
                            PaperProps={{
                                style: {width: minimized ? 70 : drawerWidth},
                            }}
                        />
                    </Hidden>
                </nav>

                <div className={classes.contentWrapper}>
                    <Header
                        {...other}
                        mobileOpen={mobileOpen}
                        accountMenuOpen={accountMenuOpen}
                        localeMenuOpen={localeMenuOpen}
                        loading={loading}
                        onDrawerToggle={handleDrawerToggled}
                        onAccountMenuToggle={handleAccountMenuToggled}
                        onLocaleMenuToggle={handleLocaleMenuToggled}
                        activateStepsGuide={activateStepsGuide}
                    />

                    {showBreadcrumbs && renderBreadcrumbs}

                    <main className={classes.content}>
                        {loading ? (
                            renderLoading
                        ) : (
                            <Grid container>{children}</Grid>
                        )}
                    </main>

                    <Footer/>
                </div>
            </div>

            {message && message.hasOwnProperty('type') > 0 && (
                <Snackbar {...message} />
            )}

            {alert && alert.hasOwnProperty('type') > 0 && <Modal {...alert} />}
        </>
    );
}

Master.propTypes = {
    classes: PropTypes.object.isRequired,
    pageTitle: PropTypes.string.isRequired,
    loading: PropTypes.bool,

    primaryAction: PropTypes.object,
    tabs: PropTypes.array,
    showBreadcrumbs: PropTypes.bool,
    message: PropTypes.object,
    alert: PropTypes.object,
};

Master.defaultProps = {
    loading: false,

    tabs: [],
    showBreadcrumbs: true,
    message: {},
    alert: {},
};

const drawerWidth = 256;

const styles = theme => ({
    loader: {
        zIndex: 9999,
    },

    root: {
        display: 'flex',
        position: 'relative',
        minHeight: '100vh',
        maxWidth: '100%',
    },

    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },

        '&$minimized': {
            [theme.breakpoints.up('sm')]: {
                width: 70,
            },
        },
    },

    minimized: {},

    breadcrumbBar: {
        zIndex: 0,
    },

    breadcrumbWrapper: {
        padding: theme.spacing.unit * 3,
    },

    contentWrapper: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'auto',
    },

    content: {
        flex: 1,
        padding: `0 ${theme.spacing.unit}px`,
        marginBottom: 75,
        [theme.breakpoints.up('sm')]: {
            padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
        },
    },

    loadingContainer: {
        minHeight: '100%',
    },
});

export default withStyles(styles)(Master);
