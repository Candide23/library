import React from 'react';
import './App.css';
import { HomePage } from './layouts/HomePage/HomePage';
import { Footer } from './layouts/NavBarAndFooter/Footer';
import { Navbar } from './layouts/NavBarAndFooter/Navbar';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import { BookCheckoutPage } from './layouts/BookCheckoutPage/BookCheckoutPage';
import {OktaAuth, toRelativeUrl} from '@okta/okta-auth-js'
import { oktaConfig } from './lib/oktaConfig';

import LoginWidget from './Auth/LoginWidget';
import { LoginCallback, Security } from '@okta/okta-react';

const oktaAuth = new OktaAuth(oktaConfig);

function App() {


  /*The code defines two functions - customAuthHandler and restoreOriginalUri.
  customAuthHandler uses the history object to navigate to the /login page.
restoreOriginalUri takes in an Okta authentication object and an original URI,
 and uses the history object to replace the current URL with the original URI,
or a default URL if none was provided. The useHistory() hook is used to access
 the history object, which is a part of the React Router library and allows for
programmatic navigation in a React application. */

  const customAuthHandler = () => {
    history.push('/login')
  }

  const history = useHistory();

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <div className='d-flex flex-column min-vh-100'>
     <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} onAuthRequired={customAuthHandler}>
      <Navbar />
      <div className='flex-grow-1'>

      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home' >
          <HomePage />
        </Route>
        <Route path='/search'>
          <SearchBooksPage />
        </Route>
        <Route path='/checkout/:bookId'>
          <BookCheckoutPage/>
        </Route>
        <Route path='/login' render={
            () => <LoginWidget config={oktaConfig} /> 
            } 
          />
          <Route path='/login/callback' component={LoginCallback} />
      </Switch>
      </div>

      <Footer />
      </Security>

    </div>
  );
}

export default App;
