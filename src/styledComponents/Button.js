import styled from "styled-components";

export const Button = styled.button`      
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
    width: calc(80% - 100px);
    min-width: 350px;
    background: #0000FF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 30px; 
    cursor: pointer;   
`

export const LogoutButton = styled(Button)`
    width: calc(35% - 50px);
    min-width: 100px;
    height: 50px;
    border-radius: 20px;
    background:#F06B93;
    :hover{
        background:#F21457;
    }
    margin-bottom: 0px; 
`

export const PredictionButton = styled(LogoutButton)`
    background: #6E6AE1;
    :hover{
        background:#0000FF;
    }
`