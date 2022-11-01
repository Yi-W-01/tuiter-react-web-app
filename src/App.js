import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import Labs from "./components/labs";
import HelloWorld from "./components/labs/a6/hello-world";
import Tuiter from "./components/tuiter"
import ExploreScreen from "./components/tuiter/explore/index";
import HomeScreen from "./components/tuiter/home-screen/index";
import ProfileScreen from "./components/tuiter/profile-screen";
import EditProfile from "./components/tuiter/profile-screen/edit-profile";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/">
                      <Route index
                             element={<Labs/>}/>
                      <Route path="hello"
                             element={<HelloWorld/>}/>
                      <Route path="tuiter"
                             element={<Tuiter/>}>
                          <Route index
                                 element={<HomeScreen/>}/>
                          <Route path="explore"
                                 element={<ExploreScreen/>}/>
                          <Route path="profile"
                                 element={<ProfileScreen/>}/>
                          <Route path="edit-profile"
                                 element={<EditProfile/>}/>
                      </Route>
                  </Route>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
