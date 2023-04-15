import { RecipeList } from './RecipeList/RecipeList';
import recipes from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 16,
        color: '#010101',
      }}
    >
      <Layout>
        <div>Recipe Form</div>
        <RecipeList items={recipes} />
        <div>Image modal</div>
        <GlobalStyle />
      </Layout>
    </div>
  );
};
