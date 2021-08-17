import './App.css';
import Login from './pages/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './pages/Home/Home';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  HttpLink,
  concat
} from "@apollo/client";
import { config } from './config';
import authorizationService from './services/authorization.service';
import AuthGuard from './components/auth-guard/auth-guard';

const httpLink = new HttpLink({ uri: config.url });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: authorizationService.isAuth() ? `Bearer ${ authorizationService.getToken() }` : null,
    }
  }));

  return forward(operation);
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});


const App = () => {
  return (
    <ApolloProvider client={ client }>
      <Router>
        <Switch>
          <AuthGuard path="/home">  
            <Home />
          </AuthGuard>
          <Route path="/login">
            <Login />
          </Route>
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    </ApolloProvider>
    );
}

export default App;
