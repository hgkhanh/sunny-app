import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";


import Header from './components/Header';
import Landing from './components/Landing';
import { fetchUser } from './actions';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const Dashboard = () => <h2>Dashboard</h2>

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Dashboard} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
