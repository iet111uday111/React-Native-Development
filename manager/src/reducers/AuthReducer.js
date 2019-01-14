import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED
}
    from "../actions/types";


const INTIAL_STATE = {
    email: '',
    password: ''
}

export default (state = INTIAL_STATE, action) => {
    console.log(action);
    
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload }
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }
        default:
            return state
    }
}