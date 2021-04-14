import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global'; 
import Routes from './routes';
import { OrdersProvider } from './OrdersContext';

const App: React.FC = () => {

  return (
    <OrdersProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>

        <GlobalStyle />  
    </OrdersProvider>
  )
};

export default App;
