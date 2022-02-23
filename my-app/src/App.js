import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Screens/Home";
import APIDetail from "./Screens/APIDetail";


import Nav from "./Components/Nav";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how2api" element={<APIDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
//export default App;
export default () => {
  return <App />;
};
