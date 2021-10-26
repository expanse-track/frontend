import { Switch, BrowserRouter } from 'react-router-dom';

//screens
import Login from './screens/login/login';
import Signup from './screens/signup/signup';
import Todos from './screens/todos/index'
import History from './screens/history';
import Summary from './screens/summary';

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
          <InnerPageGuard exact path='/home' component={Todos} />
          <InnerPageGuard exact path='/summary' component={Summary} />
          <InnerPageGuard exact path='/' component={Todos} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
