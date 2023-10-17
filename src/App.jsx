import "./App.css";
import Nev from "./components/Nev";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./pages/user/User";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="main">
          <Nev />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route>
              <Route path="/user/:userId" element={<User />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
