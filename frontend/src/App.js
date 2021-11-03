import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import './App.css';
import Nav from 'components/nav/Nav';
import Content from 'components/content/Content';

function App() {
  return (
    <>
      <Nav />
        <Content>
          <Typography variant='h3'>Coming Soon...</Typography>
        </Content>
    </>
  );
}

export default App;
