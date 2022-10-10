import styled from "styled-components";

export const Form = styled.div `
    width:100% ;
    height: auto;
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    input{
        box-sizing: border-box;
        width: calc(80% - 100px);
        min-width: 350px;
        height: 58px;
        left: 36px;
        top: 279px;
        background:${props =>props.enable? '#FFFFFF' : '#F2F2F2' };
        border: 1px solid #D5D5D5;
        border-radius: 10px;
        margin-bottom: 13px;
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        padding-left: 11px;
        ::placeholder{
            color: #000000;
        }
    }
`;