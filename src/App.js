import React from 'react';
import { BrowserRouter, Route ,Switch} from 'react-router-dom';
import { Provider } from './Context';
import Navbar from './components/Navbar';
import Main from './components/Main';
import TrackDetail from './components/TrackDetail.js';

function App() {
  return (
    <Provider>
    <BrowserRouter>
    <React.Fragment>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/:track_id" component={TrackDetail}></Route>
        </Switch>
      </div>
    </React.Fragment>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
