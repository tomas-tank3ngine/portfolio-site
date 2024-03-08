import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./assets/utils/context-utils";
import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";
import Homepage from "./assets/pages/Homepage/Homepage";

function App() {
  const handleEmailAddress = async (id) => {
    try {
      await navigator.clipboard.writeText("tomasmartinez1424@gmail.com");

      var popup = document.getElementById(id);
      popup.classList.toggle("show");
      setTimeout(() => {
        if (popup.classList.contains("show")) {
          popup.classList.toggle("show");
        }
      }, 2000);
    } catch (error) {
      console.error("Error copying to clipboard: ", error);
    }
  };
  return (
    <BrowserRouter>
      <Store>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Homepage handleEmailAddress={handleEmailAddress} />}
          />
        </Routes>
        <Footer handleEmailAddress={handleEmailAddress} />
      </Store>
    </BrowserRouter>
  );
}

export default App;
