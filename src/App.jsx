
import ScrollToTop from './ScrollToTop';
import Navbar from './Navbar';
import Foot from './Foot.js';
import './css/App.css';
import NotFound from './NotFound';



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/* Estructura de la página web y Rutas */
function App() {

  return (

    <div className="App">
      <Router>
        <ScrollToTop />
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>

            <Route exact path="/">  </Route>
          
            
            <Route component={NotFound} />
          </Switch>
          <ScrollToTop />
        </main>
      </Router>
      <footer>
        <Foot />
      </footer>
    </div>

  );
}
export default App;
