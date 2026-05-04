// src/App.jsx

import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";

const App = () => (
  <div style={{ minHeight:"100vh", backgroundColor:"#FFFFFF", fontFamily:"'DM Sans', sans-serif" }}>
    <div style={{ maxWidth:1480, margin:"0 auto", padding:"16px 16px" }}>
      <div style={{
        borderRadius: 28,
        backgroundColor: "#F5FAF6",
        border: "1px solid #F8FAFC",
        minHeight: "calc(100vh - 32px)",
        overflow: "hidden",
      }}>
        <Navbar />
        <HeroSection />
      </div>
    </div>
  </div>
);

export default App;