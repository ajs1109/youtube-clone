import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ChannelDetail from "./ChannelDetail";
import Feed from "./Feed";
import Header from "./Header";
import SearchPage from "./SearchPage";
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
