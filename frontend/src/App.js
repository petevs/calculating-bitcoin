import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import './App.css';
import Nav from 'components/nav/Nav';
import Content from 'components/content/Content';
import { BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <>
        <Nav />
          <Content>
            <Typography variant='h3'>Coming Soon...</Typography>
          </Content>
      </>
    </Router>
  );
}

export default App;
