import "./App.scss";
import { Route, Routes } from "react-router";
import Visualize from "./pages/Visualize";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Welcome from "./pages/Welcome";
import FAQ from "./components/FAQ/FAQ";
import DemoVideo from "./components/DemoVideo/DemoVideo";
import Walkthrough from "./components/Walkthrough/Walkthrough";
import Database from "./components/Database/Database";
import MenuOverlay from "./components/MenuOverlay/HamburgerMenu";
import Contact from "./pages/Contact/Contact";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <div className="App">
      <Header />
      <Header />
      <Database />
      {/* <Header /> */}
      <MenuOverlay />
      <Routes>
        <Route path="/" element={<Visualize />} />
        <Route exact path="/welcome" element={<Welcome />} />
        <Route exact path="/FAQ" element={<FAQ />} />
        <Route exact path="/demovideo" element={<DemoVideo />} />
        <Route exact path="/walkthrough" element={<Walkthrough />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
