import { Redirect, Route } from "react-router";
import authentication from "../authentication";


const ProtectedRoute = ({component:Component, ...rest}) => {
    return ( 
        <Route {...rest} render = {() => {
            if(authentication.isAuthorized())
            {
                return <Component />
            }
            else
            {
                return <Redirect to="/login"/>
            } 
        }}

        />
     );
}
 
export default ProtectedRoute;