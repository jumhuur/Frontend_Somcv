export  const INITIAL_STATE = {
    loading : false ,
    allcv: [],
    error : false
}

export const CvRadiuse = (state,action) => {
    switch (action.type) {
        case "BILOW" :
            return {
                loading : true ,
                allcv: [],
                error : false
            }
        case "DIYAAR":
            return {
                loading : true ,
                allcv: action.payload,
                error : false
            } 
        case "QALAD": 
        return {
            loading : false ,
            allcv: action.payload,
            error : true,
            default:
                state
        } 

    }

}