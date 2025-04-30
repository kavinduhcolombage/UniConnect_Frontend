import './App.css'
import { createTheme, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const theme = createTheme({
    colors: {
      blue: [
        '#eef3ff',
        '#dee2f2',
        '#bdc2de',
        '#98a0ca',
        '#7a84ba',
        '#6672b0',
        '#5c68ac',
        '#4c5897',
        '#424e88',
        '#364379',
      ],
    }
    
  })
  return (

    <MantineProvider>
      <BrowserRouter>
      <Routes>
        <Route path='*' element={<HomePage/>}/>
      </Routes>
      </BrowserRouter>
    </MantineProvider>

  )
}

export default App
