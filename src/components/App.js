import { RecipeList } from './RecipeList';
import recipes from '../recipes.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        color: '#010101',
      }}
    >
      <RecipeList items={recipes} />
    </div>
  );
};
