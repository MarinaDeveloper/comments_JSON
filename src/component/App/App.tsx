import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppContent from 'component/AppContent';

const App = () => {
  return (
    <BrowserRouter>
      <AppContent/>
    </BrowserRouter>
  );
}

export default App;