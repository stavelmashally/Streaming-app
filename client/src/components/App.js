import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import Header from './Header'
import StreamList from './streams/StreamList'
import StreamEdit from './streams/StreamEdit';
import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';

const App = props => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
        </div>
      </Router>
    </div>
  );
};

export default App;
