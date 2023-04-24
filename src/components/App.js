import { RecipeList } from './RecipeList/RecipeList';
import initialRecipies from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Component } from 'react';

export class App extends Component {
  state = {
    recipes: initialRecipies,
  };
  deleteRecipe = recipeId => {
    this.setState(prevState => ({
      recipes: prevState.recipes.filter(recipe => recipe.id !== recipeId),
    }));
  };

  render() {
    return (
      <div>
        <Layout>
          <div>Recipe Form</div>
          <RecipeList items={this.state.recipes} onDelete={this.deleteRecipe} />

          <GlobalStyle />
        </Layout>
      </div>
    );
  }
}
