export const INITIAL_STATE_CV_USER  = {
    loading: false ,
    Data: {}
}



export const  ACTIONS_CV_USER = {
    GET:"GET",
    DELETE:"DELETE",
    UPDATE:"UPDATE",
}


export const Usercvreduse = (state,action) => {
    switch (action.type) {
        case ACTIONS_CV_USER.GET:
            return {
                loading: true,
                Data: action.payload
            }
        case ACTIONS_CV_USER.UPDATE:
            return {
                loading: true,
                Data: action.payload
            }
        case ACTIONS_CV_USER.DELETE:
            return {
                loading: true,
                Data: null
            }
            default: 
            return state;
    }
}