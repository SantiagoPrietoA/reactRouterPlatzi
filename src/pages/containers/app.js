import React, { Fragment, Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Map as map } from 'immutable';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Route, Switch, Redirect } from 'react-router-dom';

import reducer from '../../reducers/index';
import Videos from './videos';
import Home from '../components/Home.jsx';
import NotFound  from '../components/notFound.jsx';
import Header from '../components/Header.jsx';
import Contact from '../components/Contact.jsx';
import Profile from '../components/Profile.jsx';

const logger_ = ({getState, dispatch }) => next => action => {
  console.log('este es mi viejo estado', getState().toJS())
  console.log('vamos a enviar está acción', action);
  const value = next(action)
  console.log('este es mi nuevo estado', getState().toJS())
  return value
}

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    )
  )
);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/videos" component={Videos}/>
            <Route exact path="/contacto" component={Contact}/>
            <Route exact path="/perfil" component={Profile}/>
            <Redirect from="/v" to="/videos"/>
            <Route path="**" component={NotFound}/>
          </Switch>
        </Fragment>
      </Provider>
    )
  }
}

export default App