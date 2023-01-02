export  const INITIAL_STATE = {
    loading : false ,
    error : false,
    allcv: [],
    AllUsers: [],
    AllDownloads: [],
    OnecvUser: [],
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
                AllUsers: action.AllUsers,
                AllDownloads: action.Downloads,
                OnecvUser: action.Onecv,
                error : true
            }
            default: 
            return state;
    }
}