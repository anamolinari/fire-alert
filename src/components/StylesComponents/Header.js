import styled, { keyframes } from "styled-components";

const fadeOpen = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const breathing = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    padding: 1rem;
    background-color: ${({ theme }) => theme.color.black};
    border: solid 1px ${({ theme }) => theme.color.gray100};
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    animation: ${fadeOpen} 1s forwards;

    div {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      h1,
      h2 {
        margin: 0;
        text-transform: uppercase;
        font-weight: ${({ theme }) => theme.font_weight.medium};
      }

      h1 {
        font-size: ${({ theme }) => theme.font_size.small};
        color: ${({ theme }) => theme.color.red};
        letter-spacing: 0.16rem;
      }

      h2 {
        font-size: ${({ theme }) => theme.font_size.large};
        color: ${({ theme }) => theme.color.white};
      }
    }
`

export const LogoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.5rem;
  height: 2.5rem;

  .logo {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    z-index: 1;
  }
`

export const LogoBackground = styled.img`
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  animation: ${breathing} infinite 5s;
  opacity: 1;

  &.fade-in {
    animation: ${fadeIn} 1.5s forwards;
  }

  &.fade-out {
    animation: ${fadeOut} 1.5s forwards;
  }
`

export const DateTime = styled.div`
  display: flex;
  text-align: right;
  margin-left: auto;
  font-size: ${({ theme }) => theme.font_size.small};
  font-weight: ${({ theme }) => theme.font_weight.regular};
  color: ${({ theme }) => theme.color.gray800};
`;