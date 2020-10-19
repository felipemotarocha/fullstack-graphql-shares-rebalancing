import styled from 'styled-components';

export const Container = styled.div`
	height: 100%;
	width: 100%;
	margin: auto;
`;

export const Headline = styled.h1`
	display: inline-block;
	color: #eee;
	border-bottom: 3px solid ${(props) => props.theme.primaryBlue};
	padding: 0.2rem 1rem;
	font-weight: 400;
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;

	@media (max-width: 320px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const Buttons = styled.div`
	display: flex;
`;

export const ButtonsContent = styled.div`
	display: flex;
	align-items: center;

	p {
		margin: 0;
		margin-right: 1rem;
		font-size: 1rem;
	}

	@media (max-width: 768px) {
		flex-direction: column;

		p {
			margin-right: 0;
			margin-bottom: 0.2rem;
		}
	}
`;
