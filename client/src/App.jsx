import './App.css';
import { Outlet, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Navbar from './components/Navbar';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';

// Create an HTTP link to the GraphQL server
const httpLink = createHttpLink({
  uri: '/graphql', // Use relative path for deployment
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Create the Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={SearchBooks} />
            <Route exact path="/saved" component={SavedBooks} />
            <Route render={() => <h1 className="display-2">Error i think?</h1>} />
          </Switch>
          <Outlet />
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
{/* Create an Apollo Provider to make 
  every request work with the Apollo Server. */}  
  