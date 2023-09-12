import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import Recommended from "./Recommended";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import Feed from "./Feed";
import ChannelDetail from "./ChannelDetail";
import VideoDetail from "./VideoDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/search/:searchItem" element={<SearchPage />} />
          <Route path="/" element={<Feed />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/video/:id" element={<VideoDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
