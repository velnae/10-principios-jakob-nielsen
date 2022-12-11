import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import {
    Button,
    FormControl,
    FormHelperText,
    Input,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Typography,
    withStyles, TextField,
} from '@material-ui/core';

import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');

const Profile = props => {
    const { classes, values, handleSubmit } = props;

    return (
        <Formik
            initialValues={values}
            validationSchema={Yup.object().shape({
                firstname: Yup.string().required(
                    Lang.get('validation.required', {
                        attribute: 'firstname',
                    }),
                ),

                lastname: Yup.string().required(
                    Lang.get('validation.required', {
                        attribute: 'lastname',
                    }),
                ),
            })}
            onSubmit={async (values, form) => {
                let mappedValues = {};
                let valuesArray = Object.values(values);

                // Format values specially the object ones (i.e Moment)
                Object.keys(values).forEach((filter, key) => {
                    if (
                        valuesArray[key] !== null &&
                        typeof valuesArray[key] === 'object' &&
                        valuesArray[key].hasOwnProperty('_isAMomentObject')
                    ) {
                        mappedValues[filter] = moment(valuesArray[key]).format(
                            'YYYY-MM-DD',
                        );

                        return;
                    }

                    mappedValues[filter] = valuesArray[key];
                });

                await handleSubmit(mappedValues, form);
            }}
            validateOnBlur={false}
        >
            {({
                values,
                errors,
                submitCount,
                isSubmitting,
                handleChange,
                setFieldValue,
            }) => (
                <Form>
                    <Typography variant="h6" gutterBottom>
                        Personal Information
                    </Typography>

                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={4}>
                            <FormControl
                                className={classes.formControl}
                                error={
                                    submitCount > 0 &&
                                    errors.hasOwnProperty('firstname')
                                }
                            >
                                <InputLabel htmlFor="firstname">
                                    Nombres{' '}
                                    <span className={classes.required}>*</span>
                                </InputLabel>

                                <Input
                                    id="firstname"
                                    name="firstname"
                                    variant="outlined"
                                    value={values.firstname}
                                    onChange={handleChange}
                                    fullWidth
                                />

                                {submitCount > 0 &&
                                    errors.hasOwnProperty('firstname') && (
                                        <FormHelperText>
                                            {errors.firstname}
                                        </FormHelperText>
                                    )}
                            </FormControl>
                        </Grid>

                        {/*<Grid item xs={12} sm={4}>*/}
                        {/*    <FormControl*/}
                        {/*        className={classes.formControl}*/}
                        {/*        error={*/}
                        {/*            submitCount > 0 &&*/}
                        {/*            errors.hasOwnProperty('middlename')*/}
                        {/*        }*/}
                        {/*    >*/}
                        {/*        <InputLabel htmlFor="middlename">*/}
                        {/*            Middlename*/}
                        {/*        </InputLabel>*/}

                        {/*        <Input*/}
                        {/*            id="middlename"*/}
                        {/*            name="middlename"*/}
                        {/*            value={values.middlename}*/}
                        {/*            onChange={handleChange}*/}
                        {/*            fullWidth*/}
                        {/*        />*/}

                        {/*        {submitCount > 0 &&*/}
                        {/*            errors.hasOwnProperty('middlename') && (*/}
                        {/*                <FormHelperText>*/}
                        {/*                    {errors.middlename}*/}
                        {/*                </FormHelperText>*/}
                        {/*            )}*/}
                        {/*    </FormControl>*/}
                        {/*</Grid>*/}

                        <Grid item xs={12} sm={8}>
                            <FormControl
                                className={classes.formControl}
                                error={
                                    submitCount > 0 &&
                                    errors.hasOwnProperty('lastname')
                                }
                            >
                                <InputLabel htmlFor="lastname">
                                    Apellidos{' '}
                                    <span className={classes.required}>*</span>
                                </InputLabel>

                                <Input
                                    id="lastname"
                                    name="lastname"
                                    value={values.lastname}
                                    onChange={handleChange}
                                    fullWidth
                                />

                                {submitCount > 0 &&
                                    errors.hasOwnProperty('lastname') && (
                                        <FormHelperText>
                                            {errors.lastname}
                                        </FormHelperText>
                                    )}
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={6}>
                            <FormControl
                                className={classes.formControl}
                                error={
                                    submitCount > 0 &&
                                    errors.hasOwnProperty('gender')
                                }
                            >
                                <InputLabel htmlFor="gender">Género</InputLabel>

                                <Select
                                    id="gender"
                                    name="gender"
                                    value={values.gender}
                                    onChange={handleChange}
                                    input={<Input fullWidth />}
                                    autoWidth
                                >
                                    <MenuItem value="">
                                        Porfavor selecciona tu género
                                    </MenuItem>

                                    <MenuItem value="female">Femenino</MenuItem>

                                    <MenuItem value="male">Masculino</MenuItem>
                                </Select>

                                {submitCount > 0 &&
                                    errors.hasOwnProperty('gender') && (
                                        <FormHelperText>
                                            {errors.gender}
                                        </FormHelperText>
                                    )}
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <FormControl
                                className={classes.formControl}
                                error={
                                    submitCount > 0 &&
                                    errors.hasOwnProperty('birthdate')
                                }
                            >
                                <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment} >
                                    <DatePicker
                                        id="birthdate"
                                        name="birthdate"
                                        label="Fecha de nacimiento"
                                        placeholder="Porfavor selecciona fecha de nacimiento"
                                        value={values.birthdate}
                                        onChange={date =>
                                            setFieldValue('birthdate', date)
                                        }
                                        format="DD-MM-YYYY"
                                        maxDate={moment()
                                            .subtract(20, 'y')
                                            .subtract(1, 'd')
                                            .format('DD-MM-YYYY')}
                                        keyboard
                                        clearable
                                        disableFuture
                                    />
                                </MuiPickersUtilsProvider>

                                {submitCount > 0 &&
                                    errors.hasOwnProperty('birthdate') && (
                                        <FormHelperText>
                                            {errors.birthdate}
                                        </FormHelperText>
                                    )}
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={12}>
                            <FormControl
                                className={classes.formControl}
                                error={
                                    submitCount > 0 &&
                                    errors.hasOwnProperty('address')
                                }
                            >
                                <InputLabel htmlFor="address">
                                    Dirección
                                </InputLabel>

                                <Input
                                    id="address"
                                    name="address"
                                    value={values.address}
                                    onChange={handleChange}
                                    fullWidth
                                    multiline
                                    rows={3}
                                />

                                {submitCount > 0 &&
                                    errors.hasOwnProperty('address') && (
                                        <FormHelperText>
                                            {errors.address}
                                        </FormHelperText>
                                    )}
                            </FormControl>
                        </Grid>
                    </Grid>

                    <div className={classes.sectionSpacer} />

                    <Grid container spacing={24} justify="flex-end">
                        <Grid item>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={
                                    (errors &&
                                        Object.keys(errors).length > 0 &&
                                        submitCount > 0) ||
                                    isSubmitting
                                }
                            >
                                Siguiente
                            </Button>
                        </Grid>
                    </Grid>
                </Form>
            )}
        </Formik>
    );
};

Profile.propTypes = {
    values: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

const styles = theme => ({
    formControl: {
        minWidth: '100%',
    },

    required: {
        color: theme.palette.error.main,
    },
});

export default withStyles(styles)(Profile);
