import Home from "./components/Home";
import Header from "./components/Header";
import FrontsCards from "./components/FrontsCards";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Profiles from "./components/profiles";
import Aboutus from "./components/About";
import Activities from "./components/Activities";
import NotesTable from "./components/NotesTable.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from "./components/Notes";
import Cards from "./components/Cards.jsx";;
import Overview from "./components/Overview.jsx";
import Landingpage from "./components/Landingpage.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Landingpage/>
                {/* <Header/> */}
                {/* <Home/> */}
      {/* <Overview/> */}
      {/* <Cards/> */}
      {/* <Activities/> */}
      <Aboutus/>
                {/* <FrontsCards /> */}
                <Footer />
              </>
            }
          ></Route>
          <Route exact path="/login" element={<Login />} />
          <Route path="/academics/2022scheme" element={<Notes />} />
          <Route path="/academics/2018scheme" element={<Notes />} />
          <Route path="/academics/2021scheme" element={<Notes />} />
          <Route exact path="/login/userProfile" element={<Profiles />} />
          <Route exact path="/2022scheme/notes" element={<NotesTable />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
