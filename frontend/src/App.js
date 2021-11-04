import './App.css';
import { Route} from 'react-router-dom'
import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterMoment'
import PrivateRoute from 'components/routes/PrivateRoute';
import { useContext } from 'react'
import GlobalContext from 'state/contexts/GlobalContext';
import useAuth from 'hooks/useAuth';

//Pages
import Home from 'pages/home/Home';
import Login from 'pages/login/Login';
import Signup from 'pages/signup/Signup';

function App() {

  const { state } = useContext(GlobalContext)
  console.log(state)

  const { loggedIn} = useAuth()
  console.log(loggedIn)

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
        <PrivateRoute exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
    </LocalizationProvider>
  );
}

export default App;
