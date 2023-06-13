import './App.css';
import { Header } from './components/Header';
import { Overview } from './pages/Overview';
import { createTheme, GlobalStyles, ThemeProvider } from '@mui/material';
import "@fontsource/montserrat";
import { Home } from './pages/Home';
import { APOEInterdependent } from './pages/APOEInterdependent';
import { APOEIndependent } from './pages/APOEIndependent';
import { DementiaRiskFactors } from './pages/DementiaRiskFactors';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#4F7F72'
    },
      secondary: {
          main: '#6D6D8D'
      }
    },
    typography: {
      allVariants: {
        fontFamily: 'Montserrat',
      },
      h1: {
        fontSize: 32,
        fontWeight: 'bold',
      },
      h3: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      h4: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      h5: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      body1: {
        fontSize: 16,
        fontWeight: '500',
      },
      body2: {
        fontSize: 16,
        fontWeight: '400',
        color: 'gray',
      },
      subtitle1: {
        fontSize: 20,
        fontWeight: '500',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ body: { backgroundColor: '#FDFEFE' } }} />
      <DementiaRiskFactors/>
      <APOEIndependent/>
    </ThemeProvider>
  );
}

export default App;
