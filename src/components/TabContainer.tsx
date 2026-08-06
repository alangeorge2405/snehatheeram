'use client';

import React, { useState, ReactNode } from 'react';
import styles from './tabContainer.module.css';

interface TabContainerProps {
  servicesPanel: ReactNode;
  holisticPanel: ReactNode;
}

export default function TabContainer({ servicesPanel, holisticPanel }: TabContainerProps) {
  const [activeTab, setActiveTab] = useState<'programs' | 'holistic'>('programs');

  return (
    <div className={styles.container}>
      {/* Tab Switcher */}
      <div className={styles.tabBar}>
        <button
          className={`${styles.tabBtn} ${activeTab === 'programs' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('programs')}
        >
          ❤️ Care Programs & Services
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === 'holistic' ? styles.activeTab : ''} ${styles.holisticTabBtn}`}
          onClick={() => setActiveTab('holistic')}
        >
          🌿 St. Camillus Holistic Care Centre
        </button>
      </div>

      {/* Tab Panels */}
      <div className={styles.tabContent}>
        {activeTab === 'programs' ? servicesPanel : holisticPanel}
      </div>
    </div>
  );
}
