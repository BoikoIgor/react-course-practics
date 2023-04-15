import PropTypes from 'prop-types';
import { BsAlarm } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { HiOutlineChartBar } from 'react-icons/hi';
import {
  Name,
  RecipeInfo,
  InfoBlock,
  BadgeList,
  Badge,
} from './RecipeCard.styled';
import { RecipeDifficulty } from 'constans';

export const RecipeCard = ({
  item: { name, image, time, servings, calories, difficulty },
}) => {
  return (
    <section>
      <img src={image} alt={name} width="240" />
      <Name>{name}</Name>
      <RecipeInfo>
        <InfoBlock>
          <BsAlarm size="24" />
          <span>{time} min</span>
        </InfoBlock>
        <InfoBlock>
          <AiOutlinePieChart size="24" />
          <span>{servings} servings</span>
        </InfoBlock>
        <InfoBlock>
          <HiOutlineChartBar size="24" />
          <span>{calories} calories</span>
        </InfoBlock>
      </RecipeInfo>
      <div>
        <h3>Difficulty</h3>
        <BadgeList>
          <Badge
            active={difficulty === RecipeDifficulty.easy}
            type={RecipeDifficulty.easy}
          >
            Easy
          </Badge>
          <Badge
            active={difficulty === RecipeDifficulty.medium}
            type={RecipeDifficulty.medium}
          >
            Medium
          </Badge>
          <Badge
            active={difficulty === RecipeDifficulty.hard}
            type={RecipeDifficulty.hard}
          >
            Hard
          </Badge>
        </BadgeList>
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
