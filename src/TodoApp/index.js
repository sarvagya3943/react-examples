import ReactDOM from 'react-dom' ;
import React from 'react' ;
import todoApp from './reducers' ;
import { createStore } from 'redux' ;
import { Provider } from 'react-redux' ;
import App from './components/App' ;

const store = createStore(todoApp) ;

const TodoApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

export default TodoApp ;
