import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Success from './pages/Success';




const Routes: React.FC = () => {
   return (
      <BrowserRouter>
         <Route path="/" component={Landing} exact />
         <Route path="/signin" component={SignIn} exact />
         <Route path="/home" component={Landing} />
         <Route path="/signup" component={SignUp} />
         <Route path="/forgot" component={ForgotPassword} />
         <Route path="/profile" component={Profile} />
         <Route path="/study" component={TeacherList} />
         <Route path="/give-classes" component={TeacherForm} />
         <Route path="/success" component={Success} />
      </BrowserRouter>
   )
}

export default Routes;