import { HeaderStyle } from "../styledComponents/HeaderStyle"
import useLocalStorage from '../hooks/useLocalStorage';
import { LogoutButton, PredictionButton } from "../styledComponents/Button";
import { useState } from "react";


export default function Header(){
    return(<HeaderStyle>
            <PredictionButton>Predict</PredictionButton>
            <PredictionButton>List</PredictionButton>
            <LogoutButton>Logout</LogoutButton>
        </HeaderStyle>
        )
}