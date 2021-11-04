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
import useModal from 'hooks/useModal';
import Login from 'pages/Login';

function App() {

  const  { handleModalOpen } = useModal()

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <Router>
        <>
          <Nav />
            <Content>
              <DollarCostAverage />
            <Button onClick={() => handleModalOpen(<Login />)}>Open Modal</Button>
            </Content>
            <MainModal />
        </>
      </Router>
    </LocalizationProvider>
  );
}

export default App;
