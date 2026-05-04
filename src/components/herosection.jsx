// src/components/HeroSection.jsx

import AppleIcon from "./appleicon";
import PhoneMockup from "./phonemockup";

const AVATARS = [
  "https://i.pravatar.cc/40?img=11",
  "https://i.pravatar.cc/40?img=32",
  "https://i.pravatar.cc/40?img=47",
  "https://i.pravatar.cc/40?img=23",
];

const HeroSection = () => (
  <section style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "64px 16px 0",
  }}>

    {/* Social proof */}
    <div className="anim-1" style={{ display:"flex", alignItems:"center", gap:12, marginBottom:48 }}>
      <div style={{ display:"flex" }}>
        {AVATARS.map((src, i) => (
          <img key={i} src={src} alt=""
            style={{ width:38, height:38, borderRadius:"50%", border:"2px solid white",
                     objectFit:"cover", marginLeft: i===0 ? 0 : -10 }} />
        ))}
        <div style={{ width:38, height:38, borderRadius:"50%", border:"2px solid white",
                      background:"#e5e7eb", display:"flex", alignItems:"center",
                      justifyContent:"center", fontSize:11, fontWeight:700,
                      color:"#374151", marginLeft:-10 }}>
          3k+
        </div>
      </div>
      <span style={{ color:"#6b7280", fontSize:14, fontWeight:500 }}>
        Trusted by thousands of healthy families
      </span>
    </div>

    {/* Headline */}
    <h1 className="anim-2" style={{
      color: "#1e3a08", fontWeight: 800, lineHeight: 1.1, marginBottom: 28,
      fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)", maxWidth: 680,
    }}>
      The Safest Way to<br />Shop for Groceries
    </h1>

    {/* Subheadline */}
    <p className="anim-3" style={{
      color: "#6b7280", fontSize: 17, lineHeight: 1.7, marginBottom: 40, maxWidth: 460,
    }}>
      Use the Olive Food Scanner App to Instantly Eliminate
      Harmful Ingredients from Your Family's Diet and Get
      Expert-Backed Food Insights
    </p>

    {/* CTA button */}
    <div className="anim-4" style={{ marginBottom: 72 }}>
      <button className="btn-primary">
        <AppleIcon size={18} />
        Download for iOS
      </button>
    </div>

    {/* Phone mockup */}
    <div className="anim-5" style={{ width:"100%", display:"flex", justifyContent:"center" }}>
      <PhoneMockup />
    </div>

  </section>
);

export default HeroSection;
