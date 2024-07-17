import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ReportPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    
    background-color: ${({ theme }) => theme.color.black};
    transition: width 0.5s ease-in-out, height 0.5s ease-in-out;
    animation: ${fadeIn} 0.5s forwards; 

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
        
        h1 {
            font-size: ${({ theme }) => theme.font_size.large};
            font-weight: ${({ theme }) => theme.font_weight.regular};
            color: ${({ theme }) => theme.color.white};
        }

        img {
            opacity: 50%;
            transition: opacity 150ms ease-out;
            cursor: pointer;

            &:hover {
                opacity: 100%;
            }
        }
    }

    label {
        width: 1px;
        height: 1px;
        overflow: hidden;
        position: absolute;
    }

    textarea {
        margin: auto;
        width: 30rem;
        height: 9rem;
        
        padding: 1rem;
        background-color: ${({ theme }) => theme.color.gray200};
        border: solid 1px ${({ theme }) => theme.color.gray300};
        border-radius: 8px;
        resize: none;
        outline: none;
        color: ${({ theme }) => theme.color.white};

        &::placeholder {
            color: ${({ theme }) => theme.color.gray700};
            font-size: ${({ theme }) => theme.font_size.large};
            font-weight: ${({ theme }) => theme.font_weight.regular};
        }
    }
`