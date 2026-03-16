import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Members from "./pages/Members";
import Album from "./pages/Album";
import Navbar from './components/Navbar';

function App() {
  return (
    // <div>
    //   <h1>BTS — ARIRANG</h1>
    // </div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/album" element={<Album />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App