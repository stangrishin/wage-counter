import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import RedirectRoute from './components/RedirectRoute';
import WageCounter from './WageCounter';

const App: React.FC = () => {
  return (
    <Router basename='/wage-counter'>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<RedirectRoute component={Login} />} />
          <Route
            path='/register'
            element={<RedirectRoute component={Register} />}
          />
          <Route path='/' element={<PrivateRoute />}>
            <Route path='/' element={<WageCounter />} />
          </Route>
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
