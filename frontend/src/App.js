import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import './App.css';
import Nav from 'components/nav/Nav';

function App() {
  return (
    <>
      <Nav />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          justifyItems: 'end'
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'calc(1fr - 240px)',
            width: 'calc(100% - 230px)',
            minHeight: '100vh',
            alignContent: 'center',
            textAlign: 'center',
            backgroundColor: 'red'
          }}
        >
          <Typography variant='h3'>Coming Soon...</Typography>
        </Box>
      </Box>
    </>
  );
}

export default App;
