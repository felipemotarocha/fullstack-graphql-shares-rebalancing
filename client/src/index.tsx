import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import App from './App/App';

import { GlobalStyle } from './index.styles';
import UserContextProvider from './contexts/user.context';

const httpLink = createHttpLink({
	uri: 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('authToken');
	return {
		headers: {
			...headers,
			Authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<ThemeProvider theme={{ primaryBlue: '#1488cc' }}>
		<GlobalStyle />
		<ApolloProvider client={client}>
			<UserContextProvider>
				<App />
			</UserContextProvider>
		</ApolloProvider>
	</ThemeProvider>,
	document.getElementById('root')
);
