import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./views/Home";
import ConsentsPage from "./views/Consents";
import HomePageLayout from "./Layouts/HomePageLayout";

function App() {
  return (
    <Router>
      <HomePageLayout>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/consents" element={<ConsentsPage />} />
        </Routes>
      </HomePageLayout>
    </Router>
  );
}

export default App;
