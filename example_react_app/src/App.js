import './App.css';
import Panel from "./components/Panel/Panel";
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import DetailsPage from "./components/DetailsPage/DetailsPage";

function App() {

  return (
      <div className="App">
          <Router>
              <Routes>
                  <Route exact path="/" element={<Panel/>}/>
                  <Route exact path="/details/:id" element={<DetailsPage/>}/>
              </Routes>
          </Router>
      </div>

  );
}

export default App;
