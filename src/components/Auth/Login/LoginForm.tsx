import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import useForm from 'react-hook-form';

type Props = {
	onSubmit?: (data: any) => void;
};

const LoginForm = ({
	onSubmit = data => {
		console.log('hola');
	}
}: Props) => {
	const { register, handleSubmit, errors } = useForm();

	// return (
	// 	<form onSubmit={handleSubmit(onSubmit)}>
	// 		<input
	// 			type='text'
	// 			placeholder='username'
	// 			name='username'
	// 			ref={register({ required: true, maxLength: 80 })}
	// 		/>
	// 		<input
	// 			type='text'
	// 			placeholder='password'
	// 			name='password'
	// 			ref={register({ required: true })}
	// 		/>

	// 		<input type='submit' />
	// 	</form>
	// );
	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<FormGroup>
				<Label for='exampleEmail'>Email</Label>
				<Input type='email' name='email' id='exampleEmail' placeholder='with a placeholder' />
			</FormGroup>
			<FormGroup>
				<Label for='examplePassword'>Password</Label>
				<Input
					type='password'
					name='password'
					id='examplePassword'
					placeholder='password placeholder'
				/>
			</FormGroup>
		</Form>
	);
};

export default LoginForm;
