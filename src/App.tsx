 import React from "react";
 import { BrowserRouter as Router, Route, Link } from "react-router-dom";
 
 import Button from '@material-ui/core/Button';

 import CollectPage from './components/CollectPage';
 import HomePage from './components/HomePage';

 
 function AppRouter() {
   return (
     <Router>
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
 
         <Route path="/" exact component={HomePage} />
         <Route path="/collect" component={CollectPage} />
       </div>
     </Router>
   );
 }
export default AppRouter;