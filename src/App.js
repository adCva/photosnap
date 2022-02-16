import './Reset.css';
import './Style.css';
import { BrowserRouter, Routes, Route}  from 'react-router-dom';
// ====== Pages.
import Home from "./Pages/Home";
import Stories from "./Pages/Stories";
import Features from "./Pages/Features";
import Pricing from "./Pages/Pricing";



function App() {
  return (
    <BrowserRouter className="App">
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/stories" element={<Stories />}/>
      <Route path="/features" element={<Features />}/>
      <Route path="/pricing" element={<Pricing />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;