import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          minHeight: '100vh',
          alignContent: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        <Typography variant='h3'>Coming Soon...</Typography>
      </Box>
    </>
  );
}

export default App;
