import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./new-venture.module.css";

export const metadata: Metadata = {
  title: "St. Camillus Holistic Care Centre | Our New Venture",
  description: "Inspired by the Charism of St. Camillus, we are establishing a holistic care center restoring health to soul, mind, and body under Dr. C.D. Sahadevan (SMO, Rtd).",
};

export default function NewVenture() {
  return (
    <div className={styles.holisticPage}>
      {/* Page Header */}
      <section className={styles.holisticHeader}>
        <div className="container">
          <h1 className={styles.holisticTitle}>ST. CAMILLUS HOLISTIC CARE CENTRE</h1>
          <p className={styles.holisticSubtitle}>
            &ldquo;Life in its Fullness&rdquo; Jn. (10:10)
          </p>
        </div>
      </section>

      {/* Holistic Care Content */}
      <section className={`${styles.holisticSection} container`}>
        <div className={styles.holisticGrid}>
          <div>
            <span className={styles.greenBadge}>New Venture</span>
            <h2 className={styles.holisticSectionTitle}>Our Mission</h2>
            
            <p className={styles.holisticDescription}>
              Inspired by the Charism of St. Camillus, our heavenly patron, we are now moving towards a new step in the field of Healthcare — a center for restoring the health of soul, mind, and body through a holistic approach. Committed to providing comprehensive care, we assume an integrative approach in therapy through our expert faculties in the fields of Ayurveda, Homeopathy, Naturopathy, and other Alternative Medicine along with Modern medical technologies and experts.
            </p>

            <p className={styles.holisticDescription}>
              Healing for the soul and mind is also the center of our priority, providing Counseling, Spiritual guidance, Confession, Retreat, and Rehabilitation. Under the guidance of legendary physician <strong>Dr. C.D. Sahadevan (SMO, Rtd)</strong>, Chief Physician at Dhanwanthari Hospital, Thodupuzha, and team, we are dedicated to providing compassionate healing and rejuvenation which is affordable and authentic.
            </p>

            <div className={styles.holisticQuote}>
              &ldquo;Our mission is to walk with you toward wholeness through Christ-centered, holistic healthcare.&rdquo;
              <span className={styles.holisticQuoteAuthor}>— Our Mission Statement</span>
            </div>

            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <h4 className={styles.featureTitle}>
                  <span className={styles.featureIcon}>🌿</span> Integrative Therapy
                </h4>
                <p className={styles.featureText}>
                  A balanced combination of Ayurveda, Homeopathy, Naturopathy, and Alternative Medicine along with Modern Medical experts.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <h4 className={styles.featureTitle}>
                  <span className={styles.featureIcon}>⛪</span> Soul &amp; Mind Healing
                </h4>
                <p className={styles.featureText}>
                  A supportive care system providing relational Counseling, Spiritual guidance, Confession, Retreats, and complete Rehabilitation.
                </p>
              </div>
            </div>

            <div style={{ marginTop: "40px" }}>
              <Link href="/contact" className="btn btn-primary" style={{ background: "linear-gradient(135deg, #10b981 0%, #047857 100%)", borderColor: "transparent", color: "#fff", padding: "14px 28px", boxShadow: "0 4px 15px rgba(16, 185, 129, 0.25)" }}>
                Connect with the Holistic Centre
              </Link>
            </div>
          </div>

          <div>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/holistic_care.png"
                alt="Serene holistic and ayurvedic wellness room at St. Camillus Holistic Care Centre"
                width={600}
                height={500}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div className={styles.imageLabel}>
                <strong>Integrative Wellness Center</strong><br />
                Under the professional guidance of Dr. C.D. Sahadevan (SMO, Rtd) and team.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
