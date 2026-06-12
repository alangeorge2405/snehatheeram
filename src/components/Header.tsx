"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Care Programs", path: "/services" },
    { name: "Support Us", path: "/donate" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""} glass`}>
      <div className={`${styles.container} container`}>
        <Link href="/" className={styles.logoContainer} onClick={() => setIsOpen(false)}>
          <Image
            src="/images/snehatheeram_logo.png"
            alt="Snehatheeram Logo"
            width={66}
            height={44}
            className={styles.logoImage}
            priority
          />
          <div className={styles.logoDivider}></div>
          <div className={styles.logoText}>
            <span className={styles.brandName}>Snehatheeram</span>
            <span className={styles.subBrand}>St. Camillus Care Home</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.ctaContainer}>
          <Link href="/donate#sponsor" className="btn btn-primary btn-sm">
            Sponsor a Meal
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          id="mobile-menu-toggle"
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerActive : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </button>

        {/* Mobile Menu Dropdown */}
        <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuActive : ""}`}>
          <ul className={styles.mobileNavList}>
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className={`${styles.mobileNavLink} ${isActive ? styles.mobileActive : ""}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <li className={styles.mobileCtaLi}>
              <Link
                href="/donate#sponsor"
                className="btn btn-primary w-100"
                onClick={() => setIsOpen(false)}
              >
                Sponsor a Meal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
