import styled from 'styled-components';

export const Container = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
`;

export const Content = styled.div`
	width: 500px;
	margin: auto;
	display: flex;
	flex-direction: column;

	h1 {
		text-align: center;
		color: #eee;
		margin-bottom: 1rem;
	}

	.ant-input:nth-child(3) {
		margin: 1rem 0;
	}

	button {
		margin-top: 1rem;
	}
`;
