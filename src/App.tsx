import { BrowserRouter,Route,Routes } from "react-router-dom";
import Aboutpage from "./screens/Aboutpage";
import Homepage from "./screens/Homepage";
import NoPage from "./screens/NoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
