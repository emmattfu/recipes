import React from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"

import "./App.css"


import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'
import HomeComponent from './pages/Home/HomeComponent'
import FavouriteRecipesComponent from "./pages/Favourite/FavouriteRecipes"
import Recipes from './pages/Recipes/Recipes'
import RecipeDetails from './pages/RecipeDetails/RecipeDetails'


function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Header />
        
        <Switch>
          <Route exact component={HomeComponent} path={process.env.PUBLIC_URL + '/'} />
          <Route exact component={FavouriteRecipesComponent} path="/favourite" />
          <Route exact component={Recipes} path="/recipes/result" />
          <Route exact component={RecipeDetails} path="/recipe/:id" />
         
          <Redirect to="/" />
        </Switch>
       
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
