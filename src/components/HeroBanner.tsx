"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./HeroBanner.module.css";

const images = [
  {
    src: "/images/banner_building.jpg",
    alt: "Snehatheeram Care Home Aluva Building",
  },
  {
    src: "/images/banner_chapel.jpeg",
    alt: "Snehatheeram Chapel Community Prayer",
  },
  {
    src: "/images/banner_altar.jpg",
    alt: "Holy Mass Altar Service at Snehatheeram Chapel",
  },
];

export default function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.bannerWrapper}>
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`${styles.slide} ${
            index === currentIndex ? styles.active : ""
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 992px) 100vw, 50vw"
            priority={index === 0}
            className={styles.bannerImage}
          />
        </div>
      ))}
      <div className={styles.indicators}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.activeDot : ""
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
