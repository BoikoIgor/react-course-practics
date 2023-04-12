import PropTypes from 'prop-types';
import { BsAlarm } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { HiOutlineChartBar } from 'react-icons/hi';

export const RecipeCard = ({
  item: { name, image, time, servings, calories },
}) => {
  return (
    <section>
      <img src={image} alt={name} width="240" />
      <h2>{name}</h2>
      <div style={{ display: 'flex', gap: 8 }}>
        <div>
          <BsAlarm size="24" />
          {time} min
        </div>
        <div>
          <AiOutlinePieChart size="24" />
          {servings} servings
        </div>
        <div>
          <HiOutlineChartBar size="24" />
          {calories} calories
        </div>
      </div>
      <div>
        <h3>Difficulty</h3>
        <div>
          <span>Easy</span>
          <span>Medium</span>
          <span>Hard</span>
        </div>
      </div>
    </section>
  );
};

RecipeCard.propTypes = {
  item: PropTypes.shape({
    // id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    // difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired,
};