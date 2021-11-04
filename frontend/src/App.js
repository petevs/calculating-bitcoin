import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterMoment'
import Login from 'pages/login/Login';
import Home from 'pages/home/Home';

function App() {

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
      </Router>
    </LocalizationProvider>
  );
}

export default App;
