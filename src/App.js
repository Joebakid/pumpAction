import "./App.css";
import Nav from "./Nav";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Docs from "./Docs";
import Command from "./Command";
import TermOfUse from "./TermOfUse";
import Features from "./Features";
import HowItWork from "./HowItWork";
import AboutApi from "./AboutApi";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header /> {/* Render Header only on the main page */}
                <Features />
                <HowItWork />
                <AboutApi />
                <Footer/>
              </>
            }
          />
          <Route path="/Docs" element={<Docs />} />
          <Route path="/Command" element={<Command />} />
          <Route path="/TermOfUse" element={<TermOfUse />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
