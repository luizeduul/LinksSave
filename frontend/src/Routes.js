import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import Links from './Pages/Manage/Links';
import CreateLinks from './Pages/Manage/Links/Create';
import EditLinks from './Pages/Manage/Links/Edit';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/manage/links" exact component={Links} />
        <Route path="/manage/links/create" component={CreateLinks} />
        <Route path="/manage/links/edit" component={EditLinks} />
      </Switch>
    </BrowserRouter>
  );
}

