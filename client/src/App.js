import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GlobalRouter from './components/routes/GlobalRouter';
import './main.css';
import store from './rematch/store';
import { mockRivers } from './mockRivers.js';

/**
 * Renders the entire application and imports the stylesheet.
 */

const useMock = true;

const App = () => {
  useEffect(() => {
    if (useMock === true) {
      store.dispatch.data.fetchRivers(mockRivers);
    } else {
      store.dispatch.data.fetchRiversAsync();
    }
  }, []);

  const rivers = useSelector((state) => state.data.rivers);

  return <Router>{rivers !== null && <GlobalRouter rivers={rivers} />}</Router>;
};

export default App;
