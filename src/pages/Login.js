import { useContext, React, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {Container} from '../styledComponents/Container';  
import axios from 'axios';
import UserContext from "../context/UserContext";
import LoginForm from '../components/LoginForm';



export default function Login(){
    const [enable, setEnable] = useState(true);
    const [userData, setUserData]= useState({
        email:'',
        password:''
    });
    const {setToken,setName } = useContext(UserContext);
    const navigate = useNavigate();


    async function handleLogin(event){
        event.preventDefault();
        setEnable(false);
        const body = {
                email: userData.email,
                password: userData.password
        };
        try{
            const res = await axios.post("https://wallet-backend-driven.herokuapp.com/login",body);
            const {token, name} = res.data;
            setToken(token);
            setName(name);
            setEnable(true);
            navigate("/wallet");
        }catch(error){
            alert("Usuario ou senha incorretos");
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
                    First Time? Register!!
                </h2>
            </Link>
        </Container>
    )
}