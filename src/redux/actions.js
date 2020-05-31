import {api, apiKey} from '../api/api'
import {GET_RECIPES, GET_RECIPE_DETAILS, CLEAR_DETAILED_RECIPE} from './types'

export function getRecipes(name) {

    return async function(dispatch) {
        try{
            const resp = await fetch(`${api}/recipes/search?apiKey=${apiKey}&query=${name}&number=1000`)
            const {results} = await resp.json()
            
            dispatch({payload: results, type: GET_RECIPES})
        } catch(error) {
            console.log(error)
        }
    }
   
  
}

export function getRecipeDetails(id) {
   
    return async function(dispatch) {
        try {
            const resp = await fetch(`${api}/recipes/${id}/information?apiKey=${apiKey}`)
            const data = await resp.json()

            dispatch({payload: data, type: GET_RECIPE_DETAILS})
        } catch(error) {
            console.log('error')
        }
       
    }
}

export function clearDetailedRecipe() {

    return {payload: '', type: CLEAR_DETAILED_RECIPE}
}
