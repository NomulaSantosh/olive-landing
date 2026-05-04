// src/components/PhoneMockup.jsx

import { useState, useEffect } from "react";
import olivelogo from "../assets/olive.jpg";

const HeartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const ShareIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  </svg>
);

// Each product has:
// - heroImg: the SINGLE big image shown inside the phone top (matches the product)
// - sideLeft/sideRight: the blurred images outside the phone on left & right
// - thumbImg: small square shown in the product card
const PRODUCTS = [
   {
    name: "Dark Chocolate Almond Bar, 70% Cacao",
    brand: "Endangered Species",
    score: 38,
    label: "Avoid",
    labelColor: "#ef4444",
    dotColor: "#ef4444",
    heroImg: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400&h=220&fit=crop",
    thumbImg: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=100&h=100&fit=crop",
    sideImgs: [
      "https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?w=120&h=120&fit=crop",
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=120&h=120&fit=crop",
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=120&h=120&fit=crop",
      "https://images.unsplash.com/photo-1511381939415-e44571a7a5be?w=120&h=120&fit=crop",
    ],
    oliver: "\"This bar's low score comes mainly from the added sugars and emulsifiers like soy lecithin, which aren't ideal for families trying to avoid processed ingredients. While dark chocolate does have some antioxidants, the sugar content and additives make this one to limit, especially for younger kids.\"",
  },
  {
    name: "Strawberry Vanilla Sparkling Tonic, Strawbe...",
    brand: "Olipop",
    score: 100,
    label: "Excellent",
    labelColor: "#16a34a",
    dotColor: "#16a34a",
    heroImg: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=220&fit=crop",
    thumbImg: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=100&h=100&fit=crop",
    sideImgs: [
      "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=120&h=120&fit=crop",
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=120&h=120&fit=crop",
      "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=120&h=120&fit=crop",
      "https://images.unsplash.com/photo-1582254465498-6bc70419b607?w=120&h=120&fit=crop",
    ],
    oliver: "\"This drink's high score is thanks to its simple and wholesome ingredients like strawberry juice and natural fibers, with no harmful additives or processed sugars, making it a great choice for your kids while still feeling like a treat!\"",
  },
  {
    name: "Gradea Raw Pure Jersey Milk",
    brand: "Claravale Farm",
    score: 100,
    label: "Excellent",
    labelColor: "#16a34a",
    dotColor: "#16a34a",
    heroImg: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=220&fit=crop",
    thumbImg: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=100&h=100&fit=crop",
    sideImgs: [
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=120&h=120&fit=crop",
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=120&h=120&fit=crop",
      "https://images.unsplash.com/photo-1506459225024-1428097a7e18?w=120&h=120&fit=crop",
      "https://images.unsplash.com/photo-1559181567-c3190ca9be46?w=120&h=120&fit=crop",
    ],
    oliver: "\"This product scored perfectly because it contains no processed sugars, seed oils, or harmful additives, making it a great option for your family's health, especially since you're looking to avoid processed foods and additives while still enjoying an occasional treat.\"",
  },
  {
    name: "Sourlittles",
    brand: "YumEarth",
    score: 84,
    label: "Excellent",
    labelColor: "#16a34a",
    dotColor: "#16a34a",
    heroImg: "https://images.unsplash.com/photo-1582058091597-35e4eb58a6e3?w=400&h=220&fit=crop",
    thumbImg: "https://images.unsplash.com/photo-1582058091597-35e4eb58a6e3?w=100&h=100&fit=crop",
    sideImgs: [
      "https://images.unsplash.com/photo-1499195333224-3ce974eecb47?w=120&h=120&fit=crop",
      "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?w=120&h=120&fit=crop",
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=120&h=120&fit=crop",
      "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=120&h=120&fit=crop",
    ],
    oliver: "\"This product's score is impacted mainly by the presence of processed sugars like organic cane sugar and organic rice syrup, which can be concerning for your family's health. While it does have some organic ingredients, the sugars can still affect your kids' energy levels, so it's good to enjoy treats like this in moderation.\"",
  },
];

const PhoneMockup = () => {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % PRODUCTS.length);
        setFading(false);
      }, 300);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const p = PRODUCTS[current];

  const goTo = (i) => {
    if (i === current) return;
    setFading(true);
    setTimeout(() => { setCurrent(i); setFading(false); }, 300);
  };

  return (
    // Outer relative container — wide enough for side images
    <div style={{ position:"relative", width:300, margin:"0 auto" }}>

      {/* ── Outside-phone blurred side images ─────────── */}
      {/* These sit OUTSIDE and behind the phone frame    */}
      {/* Left far */}
      <div style={{
        position:"absolute", left:-115, top:85,
        width:86, height:86, borderRadius:18, overflow:"hidden",
        opacity: fading ? 0 : 0.28,
        filter:"blur(4px)",
        transition:"opacity 0.3s ease",
        zIndex:0,
      }}>
        <img src={p.sideImgs[0]} alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
      </div>
      {/* Left near */}
      <div style={{
        position:"absolute", left:-36, top:75,
        width:86, height:86, borderRadius:18, overflow:"hidden",
        opacity: fading ? 0 : 0.55,
        filter:"blur(1.5px)",
        transition:"opacity 0.3s ease",
        zIndex:0,
      }}>
        <img src={p.sideImgs[1]} alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
      </div>
      {/* Right near */}
      <div style={{
        position:"absolute", right:-36, top:75,
        width:86, height:86, borderRadius:18, overflow:"hidden",
        opacity: fading ? 0 : 0.55,
        filter:"blur(1.5px)",
        transition:"opacity 0.3s ease",
        zIndex:0,
      }}>
        <img src={p.sideImgs[2]} alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
      </div>
      {/* Right far */}
      <div style={{
        position:"absolute", right:-115, top:85,
        width:86, height:86, borderRadius:18, overflow:"hidden",
        opacity: fading ? 0 : 0.28,
        filter:"blur(4px)",
        transition:"opacity 0.3s ease",
        zIndex:0,
      }}>
        <img src={p.sideImgs[3]} alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
      </div>

      {/* ── Phone frame ───────────────────────────────── */}
      <div style={{
        position:"relative", zIndex:10,
        background:"white",
        borderRadius:"44px",
        border:"4px solid #d1d5db",
        boxShadow:"0 32px 80px rgba(30,58,8,0.13)",
        overflow:"hidden",
        minHeight:560,
      }}>

        {/* Dynamic Island */}
        <div style={{ display:"flex", justifyContent:"center", paddingTop:14, paddingBottom:10 }}>
          <div style={{
            background:"black", borderRadius:9999, width:110, height:28,
            display:"flex", alignItems:"center", justifyContent:"center",
          }}>
            <div style={{ width:11, height:11, background:"#4b5563", borderRadius:"50%", marginLeft:22 }} />
          </div>
        </div>

        {/* ── Fading content ─────────────────────────── */}
        <div style={{ opacity: fading ? 0 : 1, transition:"opacity 0.3s ease" }}>

          {/* ONE big hero image — matches the product */}
          <div style={{
            margin:"0 12px 10px",
            borderRadius:18,
            overflow:"hidden",
            height:160,
          }}>
            <img
              src={p.heroImg}
              alt={p.name}
              style={{ width:"100%", height:"100%", objectFit:"cover" }}
            />
          </div>

          {/* Scroll indicator dot */}
          <div style={{ display:"flex", justifyContent:"center", marginBottom:12 }}>
            <div style={{ width:30, height:4, background:"#d1d5db", borderRadius:9999 }} />
          </div>

          {/* Product result card */}
          <div style={{
            margin:"0 12px 12px",
            background:"white",
            borderRadius:20,
            border:"1px solid #f3f4f6",
            padding:"14px 14px",
            boxShadow:"0 1px 6px rgba(0,0,0,0.07)",
          }}>
            <div style={{ display:"flex", alignItems:"flex-start", gap:12 }}>

              {/* Product thumbnail — same image as hero, small version */}
              <div style={{
                width:58, height:68,
                borderRadius:12,
                overflow:"hidden",
                background:"#f5f5f5",
                flexShrink:0,
              }}>
                <img src={p.thumbImg} alt={p.name}
                     style={{ width:"100%", height:"100%", objectFit:"cover" }} />
              </div>

              {/* Text details */}
              <div style={{ flex:1 }}>
                <p style={{ fontWeight:700, color:"#111827", fontSize:13, lineHeight:1.3, marginBottom:3 }}>
                  {p.name}
                </p>
                <p style={{ color:"#9ca3af", fontSize:12, marginBottom:10 }}>{p.brand}</p>

                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                    <div style={{ width:10, height:10, background:p.dotColor, borderRadius:"50%" }} />
                    <span style={{ fontWeight:700, color:"#111827", fontSize:14 }}>{p.score}/100</span>
                  </div>
                  <div style={{ display:"flex", gap:8, color:"#9ca3af" }}>
                    <button style={{ background:"none", border:"none", cursor:"pointer", padding:0, color:"#9ca3af" }}>
                      <HeartIcon />
                    </button>
                    <button style={{ background:"none", border:"none", cursor:"pointer", padding:0, color:"#9ca3af" }}>
                      <ShareIcon />
                    </button>
                  </div>
                </div>
                <p style={{ color:p.labelColor, fontSize:12, fontWeight:600, marginTop:3 }}>{p.label}</p>
              </div>
            </div>
          </div>

          {/* Oliver Says */}
          <div style={{ margin:"0 12px 10px", background:"#fffbeb", borderRadius:20, padding:14 }}>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}>
              <olivelogo size={24} />
              <span style={{ fontWeight:700, color:"#111827", fontSize:13 }}>Oliver Says:</span>
            </div>
            <p style={{ color:"#4b5563", fontSize:11.5, lineHeight:1.65 }}>
              {p.oliver}
            </p>
          </div>

          {/* Breakdown */}
          <div style={{ textAlign:"center", paddingBottom:8 }}>
            <p style={{ fontWeight:700, color:"#111827", fontSize:14 }}>Breakdown</p>
          </div>

        </div>
        {/* end fading wrapper */}

        {/* Dot indicators */}
        <div style={{ display:"flex", justifyContent:"center", gap:6, paddingBottom:14 }}>
          {PRODUCTS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? 22 : 8,
                height: 8,
                borderRadius: 9999,
                background: i === current ? "#1e3a08" : "#d1d5db",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

      </div>
      {/* end phone frame */}

    </div>
  );
};

export default PhoneMockup;
