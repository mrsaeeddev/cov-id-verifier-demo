import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Container } from 'reactstrap';
import Auth from '../helpers/Auth';

function LoginContainer(props) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = () => {
		console.log(email, password)
		if (email === 'verifier@vaccify.pk' && password === 'verify123') {
			Auth.authenticate();
			props.history.replace('/onlocation')
		}
		else {
			alert('Please login with correct credentials')
		}
	}

	return (
		<Container className="d-flex pt-5 mb-5">
			<Form className="w-50 mx-auto mt-5 text-center ">
				<h1>Please Sign in here</h1>
				<FormGroup className="mt-2 pt-5">
					<Input type="email" name="email" id="exampleEmail" onChange={(e) => setEmail(e.target.value)} placeholder="Please enter your email here" />
				</FormGroup>
				<FormGroup>
					<Input type="password" name="password" id="examplePassword" onChange={(e) => setPassword(e.target.value)} placeholder="Please enter your password here" />
				</FormGroup>
				<Button color="primary" className="btn btn-lg btn-primary btn-block mt-4" onClick={handleSubmit}>Submit</Button>
			</Form>
		</Container>
	);
}

export default LoginContainer;