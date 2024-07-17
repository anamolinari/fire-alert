import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.footer`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.75rem;
    padding: 0.5rem 1rem;

    background-color: ${({ theme }) => theme.color.black};
    border: solid 1px ${({ theme}) => theme.color.gray100};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    animation: ${fadeIn} 1s forwards;

    button { 
        transition: background-color 150ms ease-out;

        .buttonLink {
            font-size: ${({ theme }) => theme.font_size.large};
            font-weight: ${({ theme }) => theme.font_weight.medium};
            color: ${({ theme }) => theme.color.white};
        }
    }

    .btnCancel {
        background-color: ${({ theme }) => theme.color.gray300};

        &:hover {
            background-color: ${({ theme }) => theme.color.gray600};
            box-shadow: inset 0 0 0 1px ${({ theme }) => theme.color.gray600};
        }
    }

    .btnSave {
        background-color: ${({ theme }) => theme.color.blue100};

        &:hover {
            background-color: ${({ theme }) => theme.color.blue200};
        }
    }
`
