import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Employee from './training/Employee';
import MyForm from './training/MyForm';
import Home from './training/Home';
import PageNotFound from './training/PageNotFound';
import MaterialUiSample from './training/MaterialUiSample';
import Header from './Header';
import Footer from './Footer';
import Welcome from './training/Welcome';
import Login from './training/Login';
import DataMapper from '../redux/DataMapper';
import EmpData from './sprint/EmpData';
import CgCardMore from './sprint/CgCardMore';

const Routes = () => {
    return (
        <div>
            <Router>
                <div>
                    <Header></Header>
                    <div className="container">
                        <Switch>
                            {/* add an exact path to base url  */}
                            <Route exact path="/"> <Home /> </Route>
                            <Route path="/welcome"> <Welcome /> </Route>
                            <Route path="/emp"> <Employee /> </Route>
                            <Route path="/form"><MyForm /></Route>
                            <Route path="/home"><Home /></Route>
                            <Route path="/mat"><MaterialUiSample /></Route>
                            <Route path="/datamapper"> <DataMapper /> </Route>
                            <Route path="/empdata"> <EmpData /> </Route>
                            <Route path="/cgCardMore"><CgCardMore /></Route>
                            <Route path="/login"><Login /></Route>
                            <Route path="/*"><PageNotFound /></Route>
                        </Switch>
                    </div>
                </div>
            </Router>
            {/* <Footer /> */}
        </div>
    );
};
export default Routes;















