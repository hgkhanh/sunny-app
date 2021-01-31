import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import Header from './components/Header';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About';
import { fetchUser } from './actions';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.auth);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          {auth &&
            <Route path="/dashboard" component={Dashboard} />
          }
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
