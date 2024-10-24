import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import FicheLogement from "./pages/FicheLogement";
import NotFoundPage from "./pages/NotFoundPage";
import "./global.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/FicheLogement/:id" element={<FicheLogement />} />
          <Route path="*" element={<NotFoundPage />} />
         
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
