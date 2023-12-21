import Register from "./components/register";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/register' Component={Register}/>
      </Routes>
    </Router>

    </>
  );
}
export default App;
