import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import { Toolbar } from '@material-ui/core';
import { Link , Route } from 'react-router-dom'
import Counter from './Counter/index'
import TodoApp from './TodoApp/index'
import Button from '@material-ui/core/Button'

class App extends Component {
    render() {
        return (
            <div>
                <AppBar>
                    <Toolbar>
                        <Button><Link to="/counter" style={{color : 'white' , textDecoration : 'none'}}>Counter</Link></Button>
                        <Button><Link to="/todoApp" style={{color : 'white' , textDecoration : 'none'}}>TodoApp</Link></Button>
                        
                    </Toolbar>
                </AppBar>
                <Route path="/counter" component={Counter} />
                <Route path="/todoApp" component={TodoApp} />
            </div>
        )
    }
}

export default App;
