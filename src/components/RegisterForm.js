import { Form } from "../styledComponents/Form";
import { LoaderContainer } from "../styledComponents/LoaderContainer";
import { ThreeDots } from 'react-loader-spinner';
import { Button } from "../styledComponents/Button";

export default function RegisterForm({enable,handleSubmit, userData, setUserData }) {

    return (
        <Form enable={enable}>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='Email' value={userData.email} onChange={e => setUserData({ ...userData, email: e.target.value})} disabled={!enable} required/>
                <input type="password" placeholder='Password' value={userData.password} onChange={e => setUserData({...userData,password:e.target.value})} disabled={!enable} required />
                <input type="cep" placeholder='Cep' value={userData.cep} onChange={e => setUserData({ ...userData, cep: e.target.value})} disabled={!enable} required/>
                <input type="street" placeholder='Street' value={userData.street} onChange={e => setUserData({...userData,street:e.target.value})} disabled={!enable} required />
                <input type="houseNumber" placeholder='HouseNumber' value={userData.houseNumber} onChange={e => setUserData({ ...userData, houseNumber: e.target.value})} disabled={!enable} required/>
                <input type="complement" placeholder='Complement' value={userData.complement} onChange={e => setUserData({...userData,complement:e.target.value})} disabled={!enable} required />
                <input type="cpf" placeholder='Cpf' value={userData.cpf} onChange={e => setUserData({ ...userData, cpf: e.target.value})} disabled={!enable} required/>
             
                {enable?
                    <Button type='submit'> Register </Button>
                :
                    <LoaderContainer>
                        <ThreeDots heigth="70" width="70" color="white" ariaLabel="loading" />
                    </LoaderContainer>  
                }
            </form>
        </Form>
    );

};

