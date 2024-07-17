import styled, { keyframes } from "styled-components";
import checkIcon from "../../assets/icon-check.svg";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const NotifyPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;

    background-color: ${({ theme }) => theme.color.black};
    transition: width 0.5s ease-in-out, height 0.5s ease-in-out;
    animation: ${fadeIn} 0.5s forwards; 

    label {
        width: 1px;
        height: 1px;
        overflow: hidden;
        position: absolute;
    }

    h1 {
        font-size: ${({ theme }) => theme.font_size.large};
        font-weight: ${({ theme }) => theme.font_weight.regular};
        color: ${({ theme }) => theme.color.gray900};
    }
`

export const CheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.75rem;

    input {
        width: 1.38rem;
        height: 1.38rem;
        appearance: none;
        position: relative;

        background-color: ${({ theme }) => theme.color.gray200};
        border: solid 1px ${({ theme }) => theme.color.gray500};
        border-radius: 5px;
        cursor: pointer;

        &:checked {
            background-color: ${({ theme }) => theme.color.blue100};
            border-color: ${({ theme }) => theme.color.blue100};

            &::after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0.80rem;
                height: 0.80rem;
                
                background-image: url(${checkIcon});
                background-size: cover;
                background-repeat: no-repeat;
                transform: translate(-50%, -50%);
            }
        }
    }

    span {
            display: flex;
            align-items: center;

            margin-left: 0.75rem;
            font-size: ${({ theme }) => theme.font_size.large};
            font-weight: ${({ theme }) => theme.font_weight.medium};
            color: ${({ theme }) => theme.color.white};
        }
    
    
`;

export const EmailContainer = styled.div`
    width: 100%;

    padding: 10px;
    padding-left: 12px;
    background-color: ${({ theme }) => theme.color.gray200};
    border: solid 1px ${({ theme }) => theme.color.gray500};
    border-radius: 8px;
    margin-top: 0.75rem;

    input {
        display: flex;
        align-items: center;
        background-color: transparent;
        border: none;
        
        font-size: ${({ theme }) => theme.font_size.large};
        font-weight: ${({ theme }) => theme.font_weight.regular};
        color: ${({ theme }) => theme.color.white};
        outline: none;
    }

    ::placeholder {
        color: ${({ theme }) => theme.color.gray700}
    }
`