import { Form } from "../styledComponents/Form";
import { LoaderContainer } from "../styledComponents/LoaderContainer";
import { ThreeDots } from 'react-loader-spinner';
import { Button } from "../styledComponents/Button";

export default function LoginForm({enable,handleLogin, userData, setUserData}) {
    return (
        <Form enable={enable}>
            <form onSubmit={handleLogin}>
            <input type="email" placeholder='Email' value={userData.email} onChange={e => setUserData({ ...userData, email: e.target.value})} disabled={!enable} required/>
            <input type="password" placeholder='Password' value={userData.password} onChange={e => setUserData({...userData,password:e.target.value})} disabled={!enable} required />
            {enable?
                <Button type='submit'> Login </Button>
                :
                <LoaderContainer>
                    <ThreeDots heigth="70" width="70" color="white" ariaLabel="loading" />
                </LoaderContainer>  
                }
            </form>
        </Form>
    )
}