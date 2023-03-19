import './App.css';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { createMuiTheme, ThemeProvider } from '@mui/material';

function App() {

  const theme = createMuiTheme({
    palette: {
      background: {
        default: '#ffffff',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Header/>
      <Home/>
    </div>
    </ThemeProvider>
  );
}

export default App;
