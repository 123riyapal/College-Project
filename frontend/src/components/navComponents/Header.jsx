import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import "./header.css";
import SearchApply from "./SearchApply";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".logo img, .Nav li a, .applysearch", {
        opacity: 0,
        y: -20,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".Nav",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
    return () => context.revert();
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <Logo />
      <Navigation navItems={navItems} />
      <SearchApply />
    </header>
  );
}

const navItems = [
  { name: "Home", path: "/" },
  { name: "Academics", path: "/academics" },
  { name: "Blog", path: "/blog" },
  { name: "Admission", path: "/admission" },
  { name: "Contact", path: "/contact" },
];

export default Header;
