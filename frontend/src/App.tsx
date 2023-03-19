import './App.css';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { createTheme, GlobalStyles, ThemeProvider } from '@mui/material';

function App() {

  const theme = createTheme({
    palette: {
      background: {
        default: '#F5F5F5',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ body: { backgroundColor: '#F5F5F5' } }} />
      <Header/>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
