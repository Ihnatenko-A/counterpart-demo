 import React from "react";
 import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
 
 import Button from '@material-ui/core/Button';

 import CollectPage from './components/CollectPage';
 import HomePage from './components/HomePage';

 
 function AppRouter() {
   return (
     <Router basename="/">
       <div>
         <nav className="navbar">
           <ul className="navbar-menu">

             <li>
               <Link to="/">
                <Button variant="contained" color="primary">
                  Home
                </Button>
              </Link>
             </li>

           </ul>
         </nav>
         <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/collect" component={CollectPage} />
         </Switch>
       </div>
     </Router>
   );
 }
export default AppRouter;