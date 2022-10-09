import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow-y: scroll;
    h1{
        font-family: 'Playfair Display', serif;
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 50px;
        color: #5B84B9;
        margin-bottom: 30px;
    }
    h2{
        font-family: 'Robot', serif;
        font-style: normal;
        font-weight: 500;
        font-size: 25px;
        line-height: 50px;
        color: #5B84B9;
    }
`