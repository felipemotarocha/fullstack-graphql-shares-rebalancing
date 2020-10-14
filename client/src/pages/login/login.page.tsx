import * as React from 'react';
import { useEffect, useContext } from 'react';
import { Button } from 'antd';

import { CustomInput } from '../../components/custom-input/custom-input.component';
import { Container, Content } from './login.styles';
import { UserContext } from '../../contexts/user.context';
import { useHistory } from 'react-router-dom';

export interface LoginPageProps {
	handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: () => void;
}

const LoginPage: React.FunctionComponent<LoginPageProps> = ({
	handleEmailChange,
	handlePasswordChange,
	handleSubmit,
}) => {
	const { currentUser } = useContext(UserContext);
	const history = useHistory();

	useEffect(() => {
		if (currentUser) history.push('/');
	}, [currentUser, history]);

	return (
		<Container>
			<Content>
				<CustomInput
					placeholder='E-mail'
					type='primary'
					onChange={handleEmailChange}
				/>
				<CustomInput
					type='password'
					placeholder='Password'
					onChange={handlePasswordChange}
				/>
				<Button type='primary' onClick={handleSubmit}>
					Login
				</Button>
			</Content>
		</Container>
	);
};

export default LoginPage;
