export  const INITIAL_STATE = {
    loading : false ,
    error : false,
    allcv: []
}


export const ACTIONS = {
    GET_DATA : "GET",
    CREATE_DATA: 'CREATE',
    UPDATE_DATA: "UPDATE",
    DELETE_DATE: "DELETE"
}

export const CvRadiuse = (state,action) => {
    switch (action.type) {
        case ACTIONS.GET_DATA:
            return {
                loading: true ,
                allcv: action.payload,
                error : true
            }
            default: 
            return state;
    }
}