import { useContext, React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Container} from '../styledComponents/Container';  
import { Link } from 'react-router-dom';
import api from '../services/api';
import UserContext from "../context/UserContext";
import RegisterForm from '../components/RegisterForm';


export default function Register (){

    const [enable, setEnable] = useState(true);
    const [userData, setUserData]= useState({
        email:'',
        password:'',
        cep:'',
        street:'',
        houseNumber:'',
        complement:'',
        cpf:'',
    })
    const {setToken,setName } = useContext(UserContext);
    const navigate = useNavigate();

    async function handleSubmit(event){
        event.preventDefault();
        setEnable(false);
        const body = {
            email:userData.email,
            password:userData.password,
            cep:userData.cep,
            street:userData.street,
            houseNumber:userData.houseNumber,
            complement:userData.complement,
            cpf:userData.cpf,
        };
        try{
            const res = await api.post("register",body);
            const {token, name} = res.data;
            setToken(token);
            setName(name);
            setEnable(true);
            navigate("/main");
        }catch(error){
            alert("cannot register");
            console.log(error)
            setEnable(true);
            setUserData({...userData, email:'',
                password:'',
                cep:'',
                street:'',
                houseNumber:'',
                complement:'',
                cpf:''
            })
        }
    }


    return(
        <Container>
            <h1>PredictRobot</h1>
            <RegisterForm enable={enable} handleSubmit={handleSubmit} setUserData={setUserData} userData ={userData} />
            <Link to={"/login"} style ={{textDecoration:'none'}}>
                <h2>
                    Already Registered?Login!
                </h2>
            </Link>
        </Container>
    );
}
