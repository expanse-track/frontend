import { Switch, BrowserRouter } from 'react-router-dom';
import './app.css';

//screens
import Login from './screens/login/login';
import Signup from './screens/signup/signup';
import Todos from './screens/todos/index'
import History from './screens/history';
import Overview from './screens/overview';

//route guards
import InnerPageGuard from './guards/innerPageGuard';
import OuterPageGuard from './guards/outerPageGuard';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter >
        <Switch>
          <OuterPageGuard exact path='/login' component={Login} />
          <OuterPageGuard exact path='/signup' component={Signup} />
          <InnerPageGuard exact path='/history' component={History} />
          <InnerPageGuard exact path='/overview' component={Overview} />
          <InnerPageGuard exact path='/summary' component={Overview} />
          <InnerPageGuard exact path='/' component={Todos} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
