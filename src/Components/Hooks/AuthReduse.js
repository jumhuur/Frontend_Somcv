/* eslint-disable no-duplicate-case */
export  const INITIAL_STATE = {
    loading : false ,
    error : false,
    User: null,
    Usercv: null
}

export const ACTIONS = {
    LOGIN : "LOGIN",
    LOGOUT: 'LOGOUT',
    SINGUP: "SINGUP",
    SET_DATA: "SETDATA"
}

export const AuthRadiuse = (state,action) => {
    switch (action.type) {
        case ACTIONS.LOGIN:
            return {
                loading: true ,
                User: action.payload,
                Usercv: action.Usercv,
                error : true
            }
        case ACTIONS.LOGOUT:
            return {
                loading: true ,
                User: null,
                error : true
            }
        case ACTIONS.SET_DATA:
        case ACTIONS.LOGOUT:
            return {
                User: action.payload,
                Usercv: action.Usercv
            }
        default: 
            return state;
    }
}