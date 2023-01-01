export  const INITIAL_STATE = {
    loading : false ,
    error : false,
    allcv: [],
    AllUsers: [],
    AllDownloads: [],
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
                error : true
            }
            default: 
            return state;
    }
}


export  const INITIAL_STATE_USER = {
    loading : false ,
    error : false,
    allUsers: [],
}

export const ACTIONS_USER = {
    GET_DATA : "GET_USERS",
    CREATE_DATA: 'CREATE',
    UPDATE_DATA: "UPDATE",
    DELETE_DATE: "DELETE"
}

export const UsersReduse = (state,action) => {
    switch (action.type) {
        case ACTIONS.ACTIONS_USER:
            return {
                loading: true ,
                allUsers: action.payload,
                error : true
            }
            default: 
            return state;
    }
}

export  const INITIAL_STATE_DOWNLOAD = {
    loading : false ,
    error : false,
    allDownlods: [],
}

export const ACTIONS_DOWNLOAD = {
    GET_DATA : "GET_DOWNLOADS",
    CREATE_DATA: 'CREATE',
    UPDATE_DATA: "UPDATE",
    DELETE_DATE: "DELETE"
}

export const DownloadReduse = (state,action) => {
    switch (action.type) {
        case ACTIONS_DOWNLOAD.GET_DATA:
            return {
                loading: true ,
                allUsers: action.payload,
                error : true
            }
            default: 
            return state;
    }
}