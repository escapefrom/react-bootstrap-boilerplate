import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error404 from '@/Error404';
import Graphics from '../app/components/Graphics';
import App from '../app/App';

class RouterOutlet extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={App} exact={true}/>
          <Route path="/graphics" component={Graphics} exact={true}/>
          <Route component={Error404}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default RouterOutlet;
