import { Route, Redirect } from 'react-router-dom'
import useAuth from 'hooks/useAuth'

const PrivateRoute = ({ component: RouteComponent, ...rest}) => {
    
    const { loggedIn } = useAuth()

    return (
        <Route
          {...rest}
          render={(routeProps) =>
            loggedIn ? (
              <RouteComponent {...routeProps} />
            ) : (
              <Redirect to={"/login"} />
            )
          }
        />
      );
    };
    
    export default PrivateRoute;