import styled, { keyframes } from "styled-components";

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

export const HomePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  padding: 1rem;
  background-color: ${({ theme }) => theme.color.black};
  border-radius: 8px;
  transition: width 0.5s ease-in-out, height 0.5s ease-in-out;

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

  .button {
    display: flex;
    align-items: center;
    margin-left: auto;

    padding: 6px 1rem;
    border: none;
    border-radius: 8px;
    outline: 1px solid transparent;
    box-shadow: none;

    background-color: ${({ theme }) => theme.color.gray300};
    color: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.font_size.large};
    font-weight: ${({ theme }) => theme.font_weight.medium};
    transition: background-color 150ms ease-out;

    &:hover {
        background-color: ${({ theme }) => theme.color.gray600};
        box-shadow: inset 0 0 0 1px ${({ theme }) => theme.color.gray600};
    }
  }
`;

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