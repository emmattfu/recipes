import {api, apiKey} from '../api/api'
import {GET_RECIPES} from './types'

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