
export const initialstate = []

export const reducers = (state,actions) =>{
    switch(actions.type){
        case 'ADD':
            return [...state,{title:`item${state.length +1}`}]
            case 'delete':
                return {...state,deletedata:actions.payload}
           
            default:
                return state
    }
   
}