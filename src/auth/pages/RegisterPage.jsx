
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { borderRadius } from '@mui/system';
import { Link as LinkR } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';


export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear Cuenta'>
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Nombre Completo'
              type='text'
              placeholder='Su nombre'
              fullWidth
            />
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='Correo'
                type='email'
                placeholder='correo@google.com'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='Contraseña'
                type='password'
                placeholder='Contraseña'
                fullWidth
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12}>
                <Button variant='contained' fullWidth>
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
