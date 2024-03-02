import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./assets/utils/context-utils";

function App() {
  return (
    <BrowserRouter>
        <Store>
            <Header />
            <Routes>
                {/* <Route path="/" element={}/> */}
            </Routes>
            <Footer />
        </Store>
    </BrowserRouter>
  );
}

export default App;
