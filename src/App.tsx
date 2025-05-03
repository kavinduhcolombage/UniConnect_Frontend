import './App.css'
import { createTheme, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { Notifications } from '@mantine/notifications';
// import HomePage from './pages/HomePage';
// import FindJob from './pages/FindJob';
// import SignUpPage from './pages/SignUpPage';

const HomePage = lazy(() => import('./pages/HomePage'));
const FindJob = lazy(() => import('./pages/FindJob'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));


function App() {
  // const theme = createTheme({
  //   colors: {
  //     blue: [
  //       '#eef3ff',
  //       '#dee2f2',
  //       '#bdc2de',
  //       '#98a0ca',
  //       '#7a84ba',
  //       '#6672b0',
  //       '#5c68ac',
  //       '#4c5897',
  //       '#424e88',
  //       '#364379',
  //     ],
  //   }
    
  // })
  return (

    <MantineProvider>
      <Notifications position="top-center" zIndex={1000} />
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/find-job" element={<FindJob />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<SignUpPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </MantineProvider>

  )
}

export default App
