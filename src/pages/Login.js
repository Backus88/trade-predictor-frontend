import { useContext, React, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {Container} from '../styledComponents/Container';  
import UserContext from "../context/UserContext";
import LoginForm from '../components/LoginForm';
import api from '../services/api';
import useLocalStorage from '../hooks/useLocalStorage';



export default function Login(){
    const [enable, setEnable] = useState(true);
    const [userData, setUserData]= useState({
        email:'',
        password:''
    });
    const {setToken,setName } = useContext(UserContext);
    const navigate = useNavigate();

    function setLocalStorage(key,token){
        localStorage.setItem(key, JSON.stringify(token))
    }

    async function handleLogin(event){
        event.preventDefault();
        setEnable(false);
        const body = {
                email: userData.email,
                password: userData.password
        };
        try{
            const res = await api.post("/login",body);
            const {token, name} = res.data;
            setLocalStorage("access_token",token);
            setToken(token);
            setName(name);
            setEnable(true);
            navigate("/main");
        }catch(error){
            alert("incorrect user or password");
            setEnable(true);
            setUserData({...userData, email:'',
                password:''
            })
        }
    }

    return(
        <Container>
            <h1>PredictRobot</h1>
            <LoginForm enable={enable} handleLogin={handleLogin} userData={userData} setUserData={setUserData} />
            <Link to={"/register"} style ={{textDecoration:'none'}}>
                <h2>
                    First Time? Register Yourself!!
                </h2>
            </Link>
        </Container>
    )
}