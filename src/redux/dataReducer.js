import { GET_RECIPES, GET_RECIPE_DETAILS, CLEAR_DETAILED_RECIPE } from "./types"


const initialState = {
    recipes: JSON.parse(localStorage.getItem('recipes')) || [],
    detailedRecipe: {}
}

export default function dataReducer(state = initialState, action) {
    
    if (action.type === GET_RECIPES) {
        return {...state, recipes: action.payload}
    } else if (action.type === GET_RECIPE_DETAILS) {
        return {...state, detailedRecipe: action.payload}
    } else if (action.type === CLEAR_DETAILED_RECIPE) {
        return {...state, detailedRecipe: action.payload}
    }

    return state

}