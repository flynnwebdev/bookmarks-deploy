import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import BookmarkList from './components/BookmarkList';
import LoginForm from './components/LoginForm';
import withState, { state } from './components/State';

export default withState(() => {
  const { token } = state

  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <h1>Home Page</h1>} />
      <Route exact path="/bookmarks" render={() => (
        token ? <BookmarkList /> : <Redirect to="/login" />
      )} />
      <Route exact path="/login" render={() => (
        token ? <Redirect to="/bookmarks" /> : <LoginForm />
      )} />
    </BrowserRouter>
  )
})
