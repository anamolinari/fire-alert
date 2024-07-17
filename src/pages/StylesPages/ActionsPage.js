import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ActionsPage = styled.div`
   animation: ${fadeIn} 0.5s forwards; 
`

export const ActionsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem;
    background-color: ${({ theme }) => theme.color.black};
    color: red;
    
    button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;

        width: 7rem;
        height: 5rem;

        border: none;
        outline: none;
        box-shadow: none;

        background-color: ${({ theme }) => theme.color.gray300};
        font-size: ${({ theme }) => theme.font_size.medium};
        font-weight: ${({ theme }) => theme.font_weight.medium};
        color: ${({ theme }) => theme.color.gray800};
        transition: background-color 300ms ease-out, color 300ms ease-out;

        img {
            opacity: 50%;
            transition: opacity 300ms ease-out;
        }

        &:hover {
            background-color: ${({ theme }) => theme.color.gray600};
            box-shadow: inset 0 0 0 1px ${({ theme }) => theme.color.gray600};
            color: ${({ theme }) => theme.color.white};
            
            img {
                opacity: 100%;
            }
        }

        &.active {
            background-color: ${({ theme }) => theme.color.blue100};
            color: ${({ theme }) => theme.color.white};
            transition: background-color 300ms ease-out, color 300ms ease-out;

            img {
                opacity: 100%;
                transition: opacity 300ms ease-out;
            }
        }
    }
`


