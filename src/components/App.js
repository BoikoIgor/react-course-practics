import { RecipeList } from './RecipeList/RecipeList';
import initialRecipies from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Component } from 'react';
import { RecipeForm } from 'RecipeForm/RecipeForm';

export class App extends Component {
  state = {
    recipes: [],
  };
  componentDidMount() {
    // console.log('C did mount');
    const savedRecipes = localStorage.getItem('recipes');
    // console.log(savedRecipes);
    if (savedRecipes !== null) {
      this.setState({ recipes: JSON.parse(savedRecipes) });
    } else {
      this.setState({
        recipes: initialRecipies,
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log('prevState: ', prevState);
    if (prevState.recipes !== this.state.recipes) {
      localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
    }
  }

  addRecipe = newRecipe => {
    this.setState(prevState => ({
      recipes: [...prevState.recipes, newRecipe],
    }));
  };

  deleteRecipe = recipeId => {
    this.setState(prevState => ({
      recipes: prevState.recipes.filter(recipe => recipe.id !== recipeId),
    }));
  };

  render() {
    // console.log('rendering...');
    return (
      <Layout>
        <RecipeForm onSave={this.addRecipe} />
        <RecipeList items={this.state.recipes} onDelete={this.deleteRecipe} />
        <GlobalStyle />
      </Layout>
    );
  }
}
// https://img.taste.com.au/mOx3fOxf/w720-h480-cfill-q80/taste/2022/09/garlic-chilli-prawn-pasta-181440-1.jpg
