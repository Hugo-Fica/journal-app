
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as LinkR } from 'react-router-dom';
import { useForm } from '../../hooks';
import { AuthLayout } from '../layout/AuthLayout';

const formData = {
  email: 'hugo@google.com',
  password: '123456',
  displayName: 'Hugo Fica'
}

export const RegisterPage = () => {

  const { displayName, email, password, onInputChange,formState } = useForm(formData)

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formState)
  }

  return (
    <AuthLayout title='Crear Cuenta'>
      <form onSubmit={onSubmit}>
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
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12}>
                <Button
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
