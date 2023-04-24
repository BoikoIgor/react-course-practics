import PropTypes from 'prop-types';
import { BsAlarm } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { HiOutlineChartBar } from 'react-icons/hi';
import { HiTrash, HiZoomIn } from 'react-icons/hi';
import {
  Container,
  InfoBlock,
  Name,
  Image,
  Meta,
  RecipeInfo,
  BadgeList,
  Badge,
  Actions,
} from './RecipeCard.styled';
import { RecipeDifficulty } from 'constans';
import { Component } from 'react';
import { ImageModal } from 'components/ImageModal/ImageModal';

export class RecipeCard extends Component {
  static propTypes = {
    onDelete: PropTypes.func.isRequired,
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      time: PropTypes.number.isRequired,
      servings: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
    }).isRequired,
  };
  state = {
    selectedImg: null,
  };
  setSelectedImg = () => {
    this.setState({ selectedImg: this.props.item.image });
  };
  closeModal = () => {
    this.setState({ selectedImg: null });
  };
  render() {
    const { selectedImg } = this.state;
    const {
      item: { id, name, image, time, servings, calories, difficulty },
      onDelete,
    } = this.props;
    return (
      <Container>
        <Image src={image} alt={name} width="240" />
        <Meta>
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

          <Actions>
            <button aria-label="Delete" onClick={() => onDelete(id)}>
              <HiTrash />
            </button>
            <button aria-label="Zoom" onClick={this.setSelectedImg}>
              <HiZoomIn />
            </button>
          </Actions>
        </Meta>

        <ImageModal
          isOpen={selectedImg !== null}
          onClose={this.closeModal}
          image={selectedImg}
        />
      </Container>
    );
  }
}
