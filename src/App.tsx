import './App.css'
import {  MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Notifications } from '@mantine/notifications';
import FindTalentsPage from './pages/FIndTalentsPage';
import TalentProfilePage from './pages/TalentProfilePage';
// import HomePage from './pages/HomePage';
// import FindJob from './pages/FindJob';
// import SignUpPage from './pages/SignUpPage';

const HomePage = lazy(() => import('./pages/HomePage'));
const FindJobPage = lazy(() => import('./pages/FindJobPage'));
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
            <Route path="/find-job" element={<FindJobPage />} />
            <Route path="/find-talents" element={<FindTalentsPage />} />
            <Route path="/talent-profile" element={<TalentProfilePage />} />
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
