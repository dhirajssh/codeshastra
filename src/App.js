import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={HomeScreen} path="/" exact />
        <Route component={LoginScreen} path="/login" />
        <Route component={SignupScreen} path="/register" />
      </Switch>
    </div>
  );
}

export default App;
