import { GET_RECIPES, GET_RECIPE_DETAILS, CLEAR_DETAILED_RECIPE, CLEAR_RECIPES, ADD_FAVOURITE } from "./types"


const initialState = {
    recipes: JSON.parse(localStorage.getItem('recipes')) || [],
    detailedRecipe: {},
    favourites: JSON.parse(localStorage.getItem('favourites')) || []
}

export default function dataReducer(state = initialState, action) {
    
    if (action.type === GET_RECIPES) {
        return {...state, recipes: action.payload}
    } else if (action.type === GET_RECIPE_DETAILS) {
        return {...state, detailedRecipe: action.payload}
    } else if (action.type === CLEAR_DETAILED_RECIPE) {
        return {...state, detailedRecipe: action.payload}
    } else if (action.type === CLEAR_RECIPES) {
        return {...state, recipes: action.payload}
    } else if (action.type === ADD_FAVOURITE) {
        return {...state, favourites: [...state.favourites, action.payload]}
    }

    return state

}