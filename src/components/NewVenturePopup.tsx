'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './newVenturePopup.module.css';

export default function NewVenturePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if the user has already dismissed the popup
    const isDismissed = localStorage.getItem('dismissedNewVenturePopup');
    if (!isDismissed) {
      // Delay showing the popup slightly for a premium feel (e.g. 1.5s after load)
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent redirect on close button click
    setIsVisible(false);
    localStorage.setItem('dismissedNewVenturePopup', 'true');
  };

  const handleCardClick = () => {
    router.push('/new-venture');
  };

  if (!isVisible) return null;

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupCard} onClick={handleCardClick}>
        {/* Close Button */}
        <button 
          className={styles.closeBtn} 
          onClick={handleClose}
          aria-label="Dismiss announcement"
        >
          &times;
        </button>

        {/* Card Content */}
        <div className={styles.cardHeader}>
          <span className={styles.badge}>🌿 New Venture</span>
        </div>
        
        <h3 className={styles.cardTitle}>St. Camillus Holistic Care Centre</h3>
        
        <p className={styles.cardText}>
          Discover our new initiative dedicated to restoring the health of soul, mind, and body through authentic Ayurveda, Homeopathy, and Naturopathy.
        </p>
        
        <div className={styles.cardFooter}>
          <span className={styles.learnMoreLink}>
            Explore Holistic Healing &rarr;
          </span>
        </div>
      </div>
    </div>
  );
}
