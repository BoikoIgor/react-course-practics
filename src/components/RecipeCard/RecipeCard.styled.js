import styled from 'styled-components';
import { RecipeDifficulty } from 'constans';

export const Container = styled.section`
  position: relative;
  background-color: ${p => p.theme.colors.white};
  border: 0.05rem solid ${p => p.theme.colors.black};
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: ${p => p.theme.radiuses.sm};
  overflow: hidden;
`;

export const Name = styled.h2`
  margin-top: 0.5rem;
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 7.5rem;
  object-fit: cover;
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  flex-grow: 1;
`;

export const RecipeInfo = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const InfoBlock = styled.p`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const BadgeList = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.25rem;
`;

export const Badge = styled.span`
  padding: 0.5rem 0.75rem;
  border-radius: ${p => p.theme.radiuses.sm};
  border: 0.05rem solid ${p => p.theme.colors.black};

  background-color: ${p => {
    if (!p.active) {
      //   return;
      return '#fff';
    }
    switch (p.type) {
      case RecipeDifficulty.easy:
        return 'green';
      case RecipeDifficulty.medium:
        return 'orange';
      case RecipeDifficulty.hard:
        return p.theme.colors.accent;
      default:
        throw new Error(`Unknown badge type: ${p.type}`);
    }
  }};
  color: ${p => {
    return p.active ? p.theme.colors.white : p.theme.colors.black;
  }};
`;

export const Actions = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  gap: 0.25rem;
`;
export const CloseBtn = styled.button`
  position: absolute;
  right: 2rem;
  top: 2rem;
  border: none;
  border-radius: ${p => p.theme.radiuses.sm};
`;
