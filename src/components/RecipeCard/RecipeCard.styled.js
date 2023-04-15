import styled from 'styled-components';
import { RecipeDifficulty } from 'constans';

export const Name = styled.h2`
  margin-top: 0.5rem;
  margin-bottom: 0.75rem;
  :hover {
    color: ${p => p.theme.colors.accent};
  }
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
  gap: 0.5rem;
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

// export const Badge = styled.span`
//   padding: 0.5rem 0.75rem;
//   border-radius: ${p => p.theme.radiuses.sm};
//   border: 0.05rem solid ${p => p.theme.colors.black};

//   background-color: ${p => (p.active ? p.theme.colors.accent : '#fff')};

//   color: ${p => {
//     return p.active ? p.theme.colors.white : p.theme.colors.black;
//   }};
// `;
