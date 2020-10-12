import React from 'react';
import './App.css';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { PostList } from './pages/PostList';
import { Post } from './pages/Post';


const client = new ApolloClient({
  uri: 'http://localhost:9002/graphql',
  cache: new InMemoryCache()
});

function App() {
	return (
		<ApolloProvider client={client}>
      <Router>
      <Switch>
          <Route exact path="/">
            <PostList />
          </Route>
          <Route path="/post/:id" children={ <Post /> } />
        </Switch>
      </Router>
		</ApolloProvider>
	);
}

export default App;
