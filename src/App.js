import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./views/Home";
import ConsentsPage from "./views/Consents";
import HomePageLayout from "./Layouts/HomePageLayout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [publicKey, setPublicKey] = useState('')
  useEffect(() => {
    axios.get('http://localhost:3000/stripe/config').then(({data}) => setPublicKey(data?.stripePublicKey))
  }, [])
  return (
    <Router>
      <HomePageLayout>
        <Routes>
          <Route exact path="/" element={publicKey ? <Elements stripe={loadStripe(publicKey)}><HomePage /></Elements> : <></>} />
          <Route path="/consents" element={<ConsentsPage />} />
        </Routes>
      </HomePageLayout>
    </Router>
  );
}

export default App;
