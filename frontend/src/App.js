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
import ResetPassword from 'pages/resetPassword/ResetPassword';
import useSetUser from 'hooks/useSetUser'
import useAuthSubscribe from 'hooks/useAuthSubscribe';
import useMarketData from 'state/marketData/useMarketData';
import Portfolio from 'pages/portfolio/Portfolio';
import PortfolioMain from 'pages/portfolio/PortfolioMain';
import PublicPortfolios from 'pages/portfolio/PublicPortfolios'
import usePortfolio from 'state/portfolio/usePortfolio';
import Calculators from 'pages/calculators/Calculators';
import Bookmarks from 'pages/bookmarks/Bookmarks';


function App() {

  const { state } = useContext(GlobalContext)

  useAuthSubscribe()
  useSetUser()
  useMarketData()
  usePortfolio()

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
        <Route path='/reset-password' component={ResetPassword} />
        <Route path='/calculators' component={Calculators} />
        <Route path='/bookmarks' component={Bookmarks} />
        <PrivateRoute path='/account' component={Account} />
        <PrivateRoute exact path='/portfolio' component={PortfolioMain} />
        <PrivateRoute path='/portfolios/public' component={PublicPortfolios} testProps='hi'/>
        <PrivateRoute path='/portfolio/:id' component={Portfolio} />
    </LocalizationProvider>
  );
}

export default App;
