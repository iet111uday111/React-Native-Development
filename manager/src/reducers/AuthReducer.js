import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCESS,
    LOGIN_USER_FAIL
}
    from "../actions/types";


const INTIAL_STATE = {
    email: '',
    password: '',
    user:null,
    error: '',
    loading:false
}

export default (state = INTIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload }
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }
        case LOGIN_USER_SUCESS:
            return { ...state, user: action.payload }
        case LOGIN_USER_FAIL:
            return { 
                ...state, 
                error: 'Authentication Failed.', 
                password: '', 
                loading: false
            }
        default:
            return state
    }
}