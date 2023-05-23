import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import UseTitle from '../../../Hooks/useTitile';

const Login = () => {
    const { singIn } = useContext(AuthContext)

    const navigate = useNavigate(); 
    const location = useLocation();

    UseTitle('login')

    // console.log('login page location', location)
    let from = location.state?.from?.pathname || '/category/0';

    const handleSingIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const password = form.password.value
        const email = form.email.value
        // console.log(password, email);

        singIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                // navigate('/category/0')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Container className='w-25 mx-auto mt-5'>

            <Form onSubmit={handleSingIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Dont’t Have An Account ?<Link to="/register"> Register</Link>
                </Form.Text>
                <br />
                <Form.Text className="text-success">
                    We'll never share your email with anyone else.
                </Form.Text>
                <Form.Text className="text-danger">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form>
        </Container>

    );
};

export default Login;