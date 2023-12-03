import Home from "./components/Home";
import Header from "./components/Header";
import FrontsCards from "./components/FrontsCards";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Profiles from "./components/profiles";
import Aboutus from "./components/About";
import Activities from "./components/Activities"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from "./components/Notes";
import Cards from "./components/Cards.jsx"
import Overview from "./components/Overview.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
      <Overview/>
      <Cards/>
      <Activities/>
      <Aboutus/>
                <FrontsCards />
                <Footer />
              </>
            }
          ></Route>
          <Route exact path="/login" element={<Login />} />
          <Route path="/notes" element={<Notes />} />
          <Route exact path="/login/userProfile" element={<Profiles />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
