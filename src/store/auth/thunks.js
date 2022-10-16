import { checkingCredentials } from './authSlice';

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

    }
}
export const startGoogleSignIN = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}