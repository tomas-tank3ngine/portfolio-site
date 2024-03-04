import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./assets/utils/context-utils";
import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";
import Homepage from "./assets/pages/Homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Store>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </Store>
    </BrowserRouter>
  );
}

export default App;
