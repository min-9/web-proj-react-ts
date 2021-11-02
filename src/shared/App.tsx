import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Home, About, Posts } from '../pages';
import { Menu } from '../components';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Route exact path="/" component={Home} />
      <Switch>
        <Route exact path="/about/:id" component={About} />
        <Route path="/about" component={About} />
      </Switch>
      <Route path="/posts" component={Posts} />
    </BrowserRouter>
  );
}
