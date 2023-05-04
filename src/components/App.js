import { RecipeList } from './RecipeList/RecipeList';
import initialRecipies from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Component, useEffect, useState } from 'react';
import { RecipeForm } from 'RecipeForm/RecipeForm';

// export class App extends Component {
//   state = {
//     recipes: [],
//   };
//   componentDidMount() {
//     const savedRecipes = localStorage.getItem('recipes');
//     if (savedRecipes !== null) {
//       this.setState({ recipes: JSON.parse(savedRecipes) });
//     } else {
//       this.setState({
//         recipes: initialRecipies,
//       });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.recipes !== this.state.recipes) {
//       localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
//     }
//   }

//   addRecipe = newRecipe => {
//     this.setState(prevState => ({
//       recipes: [...prevState.recipes, newRecipe],
//     }));
//   };

//   deleteRecipe = recipeId => {
//     this.setState(prevState => ({
//       recipes: prevState.recipes.filter(recipe => recipe.id !== recipeId),
//     }));
//   };

//   render() {
//     return (
//       <Layout>
//         <RecipeForm onSave={this.addRecipe} />
//         <RecipeList items={this.state.recipes} onDelete={this.deleteRecipe} />
//         <GlobalStyle />
//       </Layout>
//     );
//   }
// }

// Функция Инициализатор:
const getInitialRecipe = () => {
  const savedRecipes = localStorage.getItem('recipes');
  if (savedRecipes !== null) {
    return JSON.parse(savedRecipes);
  } else {
    return initialRecipies;
  }
};

export const App = () => {
  const [recipes, setRecipes] = useState(getInitialRecipe);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = newRecipe => {
    setRecipes(prevState => [...prevState, newRecipe]);
  };

  const deleteRecipe = recipeId => {
    setRecipes(prevState => prevState.filter(recipe => recipe.id !== recipeId));
  };

  return (
    <Layout>
      <RecipeForm onSave={addRecipe} />
      <RecipeList items={recipes} onDelete={deleteRecipe} />
      <GlobalStyle />
    </Layout>
  );
};
