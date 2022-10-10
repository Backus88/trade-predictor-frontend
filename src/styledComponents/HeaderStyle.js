import styled from "styled-components";

export const HeaderStyle = styled.div`
    background-color: #FFFFFF;
    position: fixed;
    width: 100%;
    height: 100px;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    border: 1px solid #0000FF;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    h1{
        font-family: 'Playfair Display';
        font-style: normal;
        font-size: 30px;
        margin-right: 30px;
        color: #000000;
    }
    h2{
        font-family: 'Roboto', sans-serif;
        font-style: bold;
        font-weight: 700;
        font-size: 20px;
    }
    ion-icon{
        width: 50px;
        height: 50px;
        color: #000000;
        cursor: pointer;
    }
`;