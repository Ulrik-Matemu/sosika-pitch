
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import MarketDifferentiation from "@/components/MarketDifferentiation";
import BusinessModel from "@/components/BusinessModel";
import Scalability from "@/components/Scalability";
import Technology from "@/components/Technology";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";

const Index = () => {
  // PDF print styles
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @media print {
        body {
          font-size: 12pt;
          color: black;
          background-color: white;
        }
        
        .section {
          page-break-inside: avoid;
          margin-bottom: 20pt;
          padding: 15pt 0;
        }
        
        nav, button, .no-print {
          display: none !important;
        }
        
        h1, h2, h3, h4, h5, h6 {
          color: #00bfff;
        }
        
        p, li, table {
          color: #333;
        }
        
        .bg-black\\/30, .bg-sosikaDark, .bg-black\\/50 {
          background: white !important;
          color: black !important;
          box-shadow: none !important;
          border: 1px solid #eee !important;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll(".scroll-animation");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-sosikaDark text-white">
      <Navbar />
      <Hero />
      <div id="market">
        <Overview />
      </div>
      <MarketDifferentiation />
      <BusinessModel />
      <Scalability />
      <Technology />
      <Vision />
      <Footer />
    </div>
  );
};

export default Index;
