import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { StoreProvider } from "./store";
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register'
import Works from './pages/Works'
import Work from './pages/Work'
import Create from './pages/Create'

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/works" component={Works} />
          {/* <Route path="/works/:worksId" component={Work} /> */}
          <Route path="/create" component={Create} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
