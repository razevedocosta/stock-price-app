import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global'; 
import Routes from './routes';

import { AuthProvider } from './contexts/auth';

const App: React.FC = () => {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthProvider>

      <GlobalStyle />  
    </>
  )
};

export default App;
