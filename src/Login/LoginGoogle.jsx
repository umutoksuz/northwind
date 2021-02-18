import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import GoogleLogin from 'react-google-login'
import config from '../config'

const TOKEN_KEY = 'token';

function LoginGoogle (props) {

    useEffect(()=>{
        const token = localStorage.getItem(TOKEN_KEY);
        if (token == null) {
            
        }
    }, []);

    const googleLoginSuccess =  (response) => {
        console.log(response);
        localStorage.setItem(TOKEN_KEY, response['tokenId']);
        props.history.push('/orders');
    }
    
    const googleLoginFail =  (response) => {
        console.log(response);
    }

    return (
        <Container>
            <GoogleLogin 
                clientId={config.google_client_id}
                cookiePolicy='single_host_origin'
                onSuccess={googleLoginSuccess}
                onFailure={googleLoginFail}
            />
        </Container>
    )
}
export default LoginGoogle