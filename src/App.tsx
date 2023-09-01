import React, { FC, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './App.css';
import Router from './Router';

const App : FC = () => {

  const [queryclient] = useState(
    ()=>
      new QueryClient ({
        defaultOptions :{
          queries :{
            refetchOnWindowFocus : false,
            retry : 0
          },
        },
      })
  );
    
  return (
    <RecoilRoot>
      <QueryClientProvider client = {queryclient}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
