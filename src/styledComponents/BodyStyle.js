import styled from "styled-components";

export const Container = styled.div`
    margin-top: 130px;
    height: calc(100% - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const PageTitle = styled.h4`
    font-family: 'Playfair Display', sans-serif;
    font-style: italic;
    font-weight: 500;
    font-size: 35px;
    line-height: 48px;
    color: #5B84B9;
`;
export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: #5B84B9;
    margin-bottom: 23px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const Box = styled.div `
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    overflow-y: scroll;
    margin-top: 0;
    border: 1px solid #5B84B9;
    background-color: rgb(0,0,0,0);
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const RelativeBox = styled.div `
    margin-top: 50px;
    position: relative;
    height: 60vh;
    width: 80%;
`;
