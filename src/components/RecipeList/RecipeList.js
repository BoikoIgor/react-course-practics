import PropTypes from 'prop-types';
import { RecipeCard } from '../RecipeCard/RecipeCard';
import { List } from './RecipeList.styled';

export const RecipeList = ({ items }) => {
  return (
    // <List style={{ display: 'flex', gap: 8 }}>
    <List>
      {items.map(item => (
        <li key={item.id}>
          <RecipeCard item={item} />
        </li>
      ))}
    </List>
  );
};

RecipeList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
