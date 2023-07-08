import './App.css';
import { Overview } from './pages/Overview';
import { createTheme, GlobalStyles, ThemeProvider } from '@mui/material';
import "@fontsource/montserrat";
import { APOEStatus } from './pages/ApoeStatus';
import { PolygenicRiskScore } from './pages/PolygenicRiskScore';
import { DementiaRiskFactors } from './pages/DementiaRiskFactors';
import { Recommendation } from './pages/Recommendation';
import { Routes, Route } from 'react-router-dom';
import { Upload } from './pages/Upload';
import { GeneProvider } from './context/geneContext';
import { Survey } from './pages/Survey';
import { SurveyProvider } from './context/surveyContext';
import { ProvisionalResults } from './pages/ProvisionalResults';
import { SurveyEnd } from './pages/SurveyEnd';


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
      h2: {
        fontSize: 29,
        fontWeight: 'bold',
      },
      h3: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      h4: {
        fontSize: 22,
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
      subtitle2: {
        fontSize: 12,
        fontWeight: '500',
      },
      subtitle1: {
        fontSize: 20,
        fontWeight: '500',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ body: { backgroundColor: "#FDFEFE" } }} />
      <SurveyProvider>
      <GeneProvider>
        <Routes>
        {/* <Route path="/" element={<ProvisionalResults />} /> */}
          <Route path="/survey" element={<Survey startQuestionIndex={0} startBatchIndex={0} />} />
          <Route path="/" element={<Upload />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/polygenic-risk-score" element={<PolygenicRiskScore />} />
          <Route path="/apoe-status" element={<APOEStatus />} />
          <Route
            path="/other-genes"
            element={<DementiaRiskFactors />}
          />
          <Route path="/recommendation" element={<Recommendation />} />
          <Route path="/survey-end" element={<SurveyEnd />} />
          <Route path="/survey/provisional-result" element={<ProvisionalResults />} />
        </Routes>
      </GeneProvider>
      </SurveyProvider>
    </ThemeProvider>
  );
}

export default App;
