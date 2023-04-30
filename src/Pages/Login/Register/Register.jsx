import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import { useState } from 'react';
const Register = () => {
    const { createUser } = useContext(AuthContext)
const [accepted,setAccepted]=useState(false)

const handleAccepted=(e)=>{
// console.log(e.target)
setAccepted(e.target.checked)
}




    const handleRegister = (e) => {
        e.preventDefault();
        const form=e.target;
        const name=form.name.value
        const password=form.password.value
        const email=form.email.value
        const photo=form.photo.value
        console.log(name,password,email,photo)


        createUser(email,password)
        .then(result=>{
            const createdUser=result.user
            console.log(createdUser);
        })
        .catch(error=>{
            console.log(error);
        })

    }

    return (
        <div>
            <Container className='w-25 mx-auto mt-5'>

                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter your name" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhoto">
                        <Form.Label> Photo Url</Form.Label>
                        <Form.Control type="text" name="photo" placeholder="Enter your Photo url" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check 
                        onClick={handleAccepted}
                        type="checkbox"
                         name="accept" 
                        label={<>Accept <Link to='/terms'>Term & Conditions</Link></>} />
                    </Form.Group>
                    <Button variant="primary" disabled={!accepted} type="submit">
                        Register
                    </Button>
                    <br />
                    <Form.Text className="text-secondary">
                        Already Have An Account ?<Link to="/login"> Login</Link>
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
        </div>
    );
};

export default Register;