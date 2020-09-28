import React, { Component } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/layout/Navbar'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import NotFound from './components/pages/NotFound'
import AddUser from './components/users/AddUser'
import EditUser from './components/users/EditUser'
import User from './components/users/User'

export default class App extends Component {
    
    render() {
        return (
            <Router>
            <div className="App">
			<Navbar />
            
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/users/add" component={AddUser} />
                <Route exact path="/users/edit/:id" component={EditUser} />
                <Route exact path="/users/:id" component={User} />
                <Route component={NotFound} />
            </Switch>
    </div>
    </Router>
	)
   
}
}
