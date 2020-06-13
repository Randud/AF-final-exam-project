import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './page/Home';
import {AboutUs} from './page/AboutUs';
import {NoMatch} from './page/NoMatch';
import {Layout} from './components/Layout';
import {Navibar} from './components/Navibar';
import {Jumbotron} from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navibar />
        <Jumbotron/>
        <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/" component={AboutUs} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
