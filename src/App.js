import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import Labs from "./components/labs";
import HelloWorld from "./components/labs/a6/hello-world";
import Tuiter from "./components/tuiter"
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route index element={<Labs/>}/>
              <Route path="/hello" element={<HelloWorld/>}/>
              <Route path="/tuiter/*" element={<Tuiter/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
