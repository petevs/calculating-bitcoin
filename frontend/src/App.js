import './App.css';
import { useContext } from 'react'
import { Route} from 'react-router-dom'
import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterMoment'
import PrivateRoute from 'components/routes/PrivateRoute';

//Context
import GlobalContext from 'state/GlobalContext';

//Components
import Loading from 'components/Loading';


//Pages
import Home from 'pages/home/Home';
import Login from 'pages/login/Login';
import Signup from 'pages/signup/Signup';
import Account from 'pages/account/Account';


function App() {

  const { state } = useContext(GlobalContext)

  if(state.user.loading){
    return(
        <Loading />
    )
}

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
        <PrivateRoute exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/account' component={Account} />
    </LocalizationProvider>
  );
}

export default App;
