import { GET_RECIPES } from "./types"


const initialState = {
    recipes: []
}

export default function dataReducer(state = initialState, action) {
    
    if (action.type === GET_RECIPES) {
        return {...state, recipes: action.payload}
    }

    return state

}