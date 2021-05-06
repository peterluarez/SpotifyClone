import { FaSpotify } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form } from 'react-bootstrap';
import '../css/Login.css'
import { HashLink } from 'react-router-hash-link';
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";




const Login = () => {
    return (
        <>
            <HashLink smooth to='/' className="loginBtnHome">
                <h1 className="text-center mt-3"><b><FaSpotify className="mb-2" />Spotify</b></h1>
            </HashLink>
            <hr />
            <Container>
                <p className="text-center mt-4">
                    <b>To continue, log in to Spotify.</b>
                </p>
                <p className="text-center">
                    <Button variant="primary" size="sm" className="loginBtnFb pb-2">
                        <b className="loginBtnFbText"><FaFacebook className="mb-1" /> CONTINUE WITH FACEBOOK</b>
                    </Button>
                </p>
                <p className="text-center">
                    <Button variant="primary" size="sm" className="loginBtnApple pb-2">
                        <b className="loginBtnAppleText"><FaApple className="mb-1" /> CONTINUE WITH APPLE</b>
                    </Button>
                </p>
                <p className="text-center">
                    <Button variant="primary" size="sm" className="loginBtnGoogle pb-2">
                        <b className="loginBtnGoogleText"><FcGoogle className="mb-1" /> CONTINUE WITH GOOGLE</b>
                    </Button>
                </p>
                <p className="text-center"><b>OR</b></p>
                <Form className="loginForm">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label><b>Email address</b></Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label><b>Password</b></Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <p><a href="#"><u>Forgot Password?</u></a></p>
                    <Button variant="success" type="submit" size="sm" block className="loginBtnLogin">
                        <b>Login</b>
                    </Button>
                </Form>
                <p className="text-center mt-5"><b>Don't have an account?</b></p>
                <p className="text-center">
                    <Button variant="primary" size="sm" className="loginBtnCreateAcc pb-2">
                        <b className="loginBtnFbText">SIGN UP FOR SPOTIFY</b>
                    </Button>
                </p>
            </Container>
        </>
    )
}

export default Login