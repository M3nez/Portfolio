
import { Switch, Route } from 'react-router';
import HomePage from './Components/Home';
import EmailForm from './Components/EmailForm'
import './Components/HomePage.css'
import Projects from './Components/Projects';
import { SliderData } from './Components/SliderData';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/emailForm">
          <EmailForm />
        </Route>
        <Route path="/projects">
          <Projects slides={SliderData} />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
