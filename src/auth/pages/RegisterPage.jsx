
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as LinkR } from 'react-router-dom';
import { useForm } from '../../hooks';
import { startCreatingUserWithEmailPassword } from '../../store/auth';
import { AuthLayout } from '../layout/AuthLayout';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [(value) => value.includes('@'), 'Formato incorrecto, falta "@"'],
  password: [(value) => value.length >= 6, 'Debe tener más de 6 caracteres.'],
  displayName: [(value) => value.length > 1, 'Campo requerido.']
}

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const { status, errorMessage } = useSelector(state => state.auth);
  const isCheckingAuthetication = useMemo(() => status === 'checking', [status]);

  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidations)


  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
  }

  return (
    <AuthLayout title='Crear Cuenta'>
      <form
        className='animate__animated animate__fadeIn animate__faster'
        onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Nombre Completo'
              type='text'
              placeholder='Su nombre'
              fullWidth
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='Correo'
                type='email'
                placeholder='correo@google.com'
                fullWidth
                name='email'
                value={email}
                onChange={onInputChange}
                error={!!emailValid && formSubmitted}
                helperText={emailValid}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='Contraseña'
                type='password'
                placeholder='Contraseña'
                fullWidth
                name='password'
                value={password}
                onChange={onInputChange}
                error={!!passwordValid && formSubmitted}
                helperText={passwordValid}
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid
                item
                xs={12}
                display={!!errorMessage ? '' : 'none'}>
                <Alert severity='error'>{errorMessage}</Alert>
              </Grid>
              <Grid item xs={12}>
                <Button
                  disabled={isCheckingAuthetication}
                  type='submit'
                  variant='contained'
                  fullWidth>
                  Crear Cuenta
                </Button>
              </Grid>
              <Grid container direction='row' justifyContent='end'>
                <Typography>¿Ya tienes una cuenta?</Typography>
                <Link component={LinkR} sx={{ ml: 1 }} color='inherit' to='/auth/login'>
                  Ingresar
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
