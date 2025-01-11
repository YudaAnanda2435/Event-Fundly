import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Step from "./components/Step";
import FeaturesOverview from "./components/features-overview";
import WebsiteOverview from "./components/website-overview";
import FAQSection from "./components/faq-section";
import ContactForm from "./components/contact-form";
import Purpose from "./components/Purpose";
import Footer from "./components/Footer";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import RiwayatTabungan from "./pages/Dashboard/RiwayatTabungan";
import RencanaBaru from "./pages/Dashboard/RencanaBaru";
import Input from "../src/pages/Rencana/input";
import TabunganSaya from "./pages/Dashboard/TabunganSaya";
import Payment from "./pages/Rencana/payment";
import "../src/index.css";

const AppContent = () => {
  const location = useLocation();

  const hideNavbarRoutes = [
    "/signin",
    "/signup",
    "/dashboard",
    "/dashboard/riwayat",
    "/dashboard/rencana",
    "/dashboard/input",
    "/dashboard/tabungan-saya",
    "/dashboard/payment",
  ];
  const shouldHideNavbar = hideNavbarRoutes.includes(
    location.pathname.toLowerCase()
  );

  return (
    <div>
      {!shouldHideNavbar && (
        <>
          <Navbar />
          <HeroSection />
          <Step />
          <FeaturesOverview />
          <WebsiteOverview />
          <FAQSection />
          <ContactForm />
          <Purpose/>
          <Footer/>
        </>
      )}

      {/* Main content */}
      <div className={!shouldHideNavbar ? "mt-16" : ""}>
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="riwayat" element={<RiwayatTabungan />} />
            <Route path="rencana" element={<RencanaBaru />} />
            <Route path="input" element={<Input />} />
            <Route path="tabungan-saya" element={<TabunganSaya />} />
            <Route path="payment" element={<Payment />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
