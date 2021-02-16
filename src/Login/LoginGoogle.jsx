import React from 'react'
import { Container } from 'react-bootstrap'
import GoogleLogin from 'react-google-login'
import config from '../config'

function LoginGoogle (props) {


    const googleLoginSuccess =  (response) => {
        console.log(response);
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