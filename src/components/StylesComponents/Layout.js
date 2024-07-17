import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px;
    height: 100vh;
    background-color: ${({ theme }) => theme.color.black};
    transition: width 0.3s ease, height 0.3s ease;

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: calc(100vh - 100px);
      overflow-y: auto;
      overflow: hidden;
    }

`;

export const ContentWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
`;

