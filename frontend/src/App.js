import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import './App.css';
import Nav from 'components/nav/Nav';
import Content from 'components/content/Content';
import { BrowserRouter as Router} from 'react-router-dom'
import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterMoment'
import DollarCostAverage from 'pages/calculators/dollarCostAverage/DollarCostAverage';
import MainModal from 'components/MainModal';

function App() {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <Router>
        <>
          <Nav />
            <Content>
              <DollarCostAverage />
            </Content>
        </>
      </Router>
    </LocalizationProvider>
  );
}

export default App;
