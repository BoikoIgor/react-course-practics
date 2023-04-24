import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import { CloseBtn } from '../RecipeCard/RecipeCard.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

export const ImageModal = ({ isOpen, image, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <div>
        <img src={image} alt="Recipe" width="640" />
        <CloseBtn type="button" onClick={onClose}>
          <AiOutlineClose size="24" />
        </CloseBtn>
      </div>
    </Modal>
  );
};
