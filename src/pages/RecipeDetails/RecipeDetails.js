import React, {useState, useEffect} from 'react'
import {getRecipeDetails} from '../../redux/actions'
import {useDispatch, useSelector} from 'react-redux'

function RecipeDetails({match}) {
const [id] = useState(match.params.id)
const dispatch = useDispatch()

// useEffect(() => {
//     dispatch(getRecipeDetails(id))
// }, [id])

dispatch(getRecipeDetails(id))

const recipe = useSelector(store => store.detailedRecipe)


console.log(recipe)

    return (
    <h1>Recipe Details {id}</h1>
    )
}

export default RecipeDetails