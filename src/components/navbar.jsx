// src/components/Navbar.jsx

import { useState } from "react";
import olivelogo from "../assets/olive.jpg";
const NAV_ITEMS = [
  { label: "Olive Health", hasDropdown: false },
  { label: "Solutions",    hasDropdown: true  },
  { label: "Features",     hasDropdown: false },
  { label: "Pricing",      hasDropdown: false },
  { label: "Blog",         hasDropdown: true  },
  { label: "Restaurants",  hasDropdown: false },
  { label: "Food",         hasDropdown: true  },
];

const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 md:px-10 py-5">

      {/* LOGO */}
      <div className="flex items-center gap-1">
         <img
    src={olivelogo}
    alt="Olive"
    style={{ height: 68 }}
  />
      </div>

      {/* DESKTOP NAV */}
      <div className="hidden md:flex items-center gap-6">
        {NAV_ITEMS.map(({ label, hasDropdown }) => (
          <button key={label} className="nav-link whitespace-nowrap">
            {label}
            {hasDropdown && <ChevronDown />}
          </button>
        ))}
      </div>

      {/* DESKTOP CTA */}
      <div className="hidden md:flex items-center gap-5">
        <button className="nav-link font-semibold" style={{ color: "#374151" }}>
          Sign in
        </button>
        <button className="btn-nav">
          Get Olive <ChevronRight />
        </button>
      </div>

      {/* MOBILE TOGGLE */}
      <button className="md:hidden bg-transparent border-none cursor-pointer p-1"
        onClick={() => setMobileOpen(!mobileOpen)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e3a08" strokeWidth="2">
          {mobileOpen
            ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
            : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
          }
        </svg>
      </button>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 z-50 mx-4 mt-2
                        bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col p-4 gap-1">
          {NAV_ITEMS.map(({ label }) => (
            <button key={label}
              className="text-left px-3 py-2.5 rounded-xl font-medium text-gray-700
                         hover:bg-green-50 hover:text-green-900 transition-colors
                         border-none bg-transparent cursor-pointer text-sm">
              {label}
            </button>
          ))}
          <hr className="border-gray-100 my-1" />
          <button className="text-left px-3 py-2.5 text-gray-700 font-medium bg-transparent border-none cursor-pointer text-sm">Sign in</button>
          <button className="btn-primary justify-center mt-1">Get Olive</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;