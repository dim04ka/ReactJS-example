import React, { Component}  from 'react';
import './App.css';
import ShowHide from './ShowHide';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import News from "./News";
import NotFound from "./NotFound";
import Input from "./Input";
import CurrentDate from "./currentDate";
import Tasks from "./Tasks";


export default class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ShowHide}/>
                    <Route path="/news" component={News}/>
                    <Route path='/input' component={Input}/>
                    <Route path='/currentdate' component={CurrentDate}/>
                    <Route path="/404" component={NotFound}/>
                    <Route path='/tasks' component={Tasks}/>
                    <Redirect path='*' to='/404'/>
                </Switch>
            </BrowserRouter>
        )
    }
};
