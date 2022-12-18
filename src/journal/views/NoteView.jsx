import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { useForm } from '../../hooks/useForm';
import { setActiveNote, startSaveNote } from '../../store/journal';
import { ImageGallery } from '../components';


export const NoteView = () => {

    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);
    const dispatch = useDispatch();

    const { body, title, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toLocaleString('es-cl');
    }, [date]);

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState]);

    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire('Nota actualizada', messageSaved, 'success');
        }
    }, [messageSaved])


    const onSaveNote = () => {
        dispatch(startSaveNote());
    }

    return (
        <Grid
            className='animate__animated animate__fadeIn animate__faster'
            container
            direction='row'
            justifyContent='space-between'
            sx={{ mb: 1 }}>
            <Grid item  >
                <Typography fontSize={39}>{dateString}</Typography>
            </Grid>
            <Grid item>
                <Button
                    disabled={isSaving}
                    onClick={onSaveNote}
                    color='primary'
                    sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    placeholder='ingresa un titulo'
                    label='Título'
                    sx={{ border: 'none', mb: 1 }}
                    name='title'
                    value={title}
                    onChange={onInputChange}
                />
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder='¿Que sucedio en el dia de hoy?'
                    sx={{ border: 'none', mb: 1 }}
                    minRows={5}
                    name='body'
                    value={body}
                    onChange={onInputChange}
                />

            </Grid>
            <ImageGallery />

        </Grid>
    )
}
