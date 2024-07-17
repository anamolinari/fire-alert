import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  border: solid 1px ${({ theme }) => theme.color.gray100};
  border-top: none;
  animation: ${fadeIn} 1s forwards;

  .tabs {
    display: flex;
    align-items: center;
    padding: 0.75rem;
  }

  .tabs * {
    z-index: 2;
  }

  .tab.active {
    color: ${({ theme }) => theme.color.white}; 
  }
  
  input[type=radio] {
    display: none;
  }

  .tab {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer; 
    padding: 0 16px;

    font-size: ${({ theme }) => theme.font_size.large};
    font-weight: ${({ theme }) => theme.font_weight.medium};
    color: ${({ theme }) => theme.color.gray800};
    transition: color 1s ease;

    &:hover {
      color: ${({ theme }) => theme.color.white};
    }
  }

.glider {
    position: absolute;
    display: flex;
    height: 32px;
    width: 79px;
    background-color: ${({ theme }) => theme.color.gray200};
    border-radius: 50px;
    z-index: 1;
    transition: 0.25s ease-out;
}

input[id=report]:checked ~ .glider {
  transform: translateX(0);
}
input[id=notify]:checked ~ .glider {
  transform: translateX(95%);
}
input[id=actions]:checked ~ .glider {
  transform: translateX(195%);
}
`


