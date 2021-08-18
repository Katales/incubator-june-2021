import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';

import './css/bem.css'
import './css/common.css'
import './App.css';


import {Users} from "./components/Users/Users";
import {Posts} from "./components/Posts/Posts";
import {Comments} from "./components/Comments/Comments";

function App() {
  return (
    <div className="taskScreen">
      <Router>
          <div className={'menuBlock flxRow flxSE'}>
              <Link to={'/users'} className={'menuItem button'}>Users</Link>
              <Link to={'/posts'} className={'menuItem button'}>Posts</Link>
              <Link to={'/comments'} className={'menuItem button'}>Comments</Link>
          </div>

          <Route path={'/users'} component={Users}/>
          <Route path={'/posts'} component={Posts}/>
          <Route path={'/comments'} component={Comments}/>

      </Router>
    </div>
  );
}

export default App;
