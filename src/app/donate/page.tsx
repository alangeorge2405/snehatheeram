import Link from "next/link";
import styles from "./donate.module.css";

export default function Donate() {
  return (
    <div className={styles.donatePage}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.title}>Support Snehatheeram</h1>
          <p className={styles.subtitle}>
            Your contribution directly funds the daily care and nutritional needs of our residents.
          </p>
        </div>
      </section>

      {/* Core Needs & Expense Details */}
      <section className="section" style={{ paddingBottom: "20px" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <h2 className={styles.sectionTitle}>Current Strength & Expenses</h2>
          <p className={styles.panelIntro} style={{ fontSize: "1.15rem", lineHeight: "1.8", color: "var(--text-secondary)" }}>
            Snehatheeram currently provides residential care for <strong>12 residents</strong>. Including our dedicated nursing, cooking, and administrative staff, the total strength of our household is <strong>15 to 17 people</strong> daily.
          </p>
          
          <div className={styles.optionsGrid} style={{ marginTop: "40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}>
            <div className={styles.optionCard} style={{ cursor: "default", padding: "30px", border: "2px solid var(--primary-color)" }}>
              <div className={styles.cardHeader} style={{ justifyContent: "center", flexDirection: "column", gap: "10px" }}>
                <span className={styles.cardTitle} style={{ fontSize: "1.25rem" }}>Sponsor a Lunch</span>
                <span className={styles.cardAmount} style={{ fontSize: "2rem" }}>₹3,000</span>
              </div>
              <p className={styles.cardDesc} style={{ textAlign: "center", marginTop: "10px" }}>
                Covers the average cost of preparing a nutritious afternoon lunch for all 12 residents and onsite staff.
              </p>
            </div>

            <div className={styles.optionCard} style={{ cursor: "default", padding: "30px", border: "2px solid var(--primary-color)" }}>
              <div className={styles.cardHeader} style={{ justifyContent: "center", flexDirection: "column", gap: "10px" }}>
                <span className={styles.cardTitle} style={{ fontSize: "1.25rem" }}>Sponsor a Full Day</span>
                <span className={styles.cardAmount} style={{ fontSize: "2rem" }}>₹6,000</span>
              </div>
              <p className={styles.cardDesc} style={{ textAlign: "center", marginTop: "10px" }}>
                Covers the total daily expense for all residents, including breakfast, lunch, dinner, utilities, and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Ways to Support Us */}
      <section className="section" style={{ paddingTop: "0px", paddingBottom: "40px" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <h2 className={styles.sectionTitle} style={{ fontSize: "1.75rem", marginBottom: "30px" }}>Alternative Ways to Support Us</h2>
          
          <div className={styles.optionsGrid}>
            <div className={styles.optionCard} style={{ cursor: "default", padding: "30px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <div style={{ fontSize: "2.5rem" }}>🙏</div>
              <span className={styles.cardTitle} style={{ fontSize: "1.25rem" }}>Prayer Support</span>
              <p className={styles.cardDesc} style={{ textAlign: "center", marginTop: "10px" }}>
                Offer prayers for our mission. Your spiritual support helps sustain our community and guides our caregivers as they serve those in need.
              </p>
            </div>

            <div className={styles.optionCard} style={{ cursor: "default", padding: "30px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <div style={{ fontSize: "2.5rem" }}>🤝</div>
              <span className={styles.cardTitle} style={{ fontSize: "1.25rem" }}>Volunteer Service</span>
              <p className={styles.cardDesc} style={{ textAlign: "center", marginTop: "10px" }}>
                Anyone can offer volunteering for our mission. Lend your time, skills, or professional expertise in healthcare, activities, or general care support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Transfer Details Section */}
      <section id="bank-details" className={`${styles.bankSection} section`}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 className={styles.sectionTitle}>Bank Transfer Details</h2>
            <p className={styles.subtitle}>
              All bank transfers are managed under the Sneha Charitable Trust. To protect account details, the full account numbers are not published online. Please contact us directly to obtain transfer details.
            </p>
          </div>
          
          <div className={styles.bankGrid}>
            {/* Local SIB account */}
            <div className={styles.bankCard}>
              <h3 className={styles.bankCardTitle}>
                Indian Donors <span className={styles.bankBadge}>Domestic Transfer</span>
              </h3>
              <div className={styles.bankDetailsList}>
                <div className={styles.bankDetailRow}>
                  <span className={styles.bankLabel}>Account Name</span>
                  <span className={styles.bankValue}>Sneha Charitable Trust - Snehatheeram</span>
                </div>
                <div className={styles.bankDetailRow}>
                  <span className={styles.bankLabel}>Bank Name</span>
                  <span className={styles.bankValue}>South Indian Bank (SIB)</span>
                </div>
                <div className={styles.bankDetailRow}>
                  <span className={styles.bankLabel}>Branch</span>
                  <span className={styles.bankValue}>Aluva Branch, Ernakulam, Kerala</span>
                </div>
                <div className={styles.bankDetailRow}>
                  <span className={styles.bankLabel}>IFSC Code</span>
                  <span className={styles.bankValue}>SIBL0000022</span>
                </div>
              </div>
            </div>

            {/* Foreign FCRA SIB account */}
            <div className={styles.bankCard}>
              <h3 className={styles.bankCardTitle}>
                International Donors <span className={styles.bankBadgeForeign}>FCRA Account</span>
              </h3>
              <div className={styles.bankDetailsList}>
                <div className={styles.bankDetailRow}>
                  <span className={styles.bankLabel}>Account Name</span>
                  <span className={styles.bankValue}>Sneha Charitable Trust - FCRA</span>
                </div>
                <div className={styles.bankDetailRow}>
                  <span className={styles.bankLabel}>Bank Name</span>
                  <span className={styles.bankValue}>South Indian Bank (SIB)</span>
                </div>
                <div className={styles.bankDetailRow}>
                  <span className={styles.bankLabel}>Branch</span>
                  <span className={styles.bankValue}>Aluva Branch, Ernakulam, Kerala</span>
                </div>
                <div className={styles.bankDetailRow}>
                  <span className={styles.bankLabel}>IFSC Code</span>
                  <span className={styles.bankValue}>SIBL0000022</span>
                </div>
                <p style={{ fontSize: "0.8rem", color: "var(--text-light)", fontStyle: "italic", marginTop: "8px" }}>
                  *All international transactions must be made through this FCRA registered bank account in accordance with Indian regulations.
                </p>
              </div>
            </div>
          </div>

          {/* Connection and Volunteering Info Card */}
          <div style={{
            marginTop: "50px",
            background: "linear-gradient(135deg, var(--background-secondary) 0%, rgba(200, 75, 75, 0.05) 100%)",
            border: "2px solid var(--primary-color)",
            borderRadius: "var(--border-radius-lg)",
            padding: "40px",
            textAlign: "center",
            boxShadow: "var(--shadow-sm)"
          }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>🤝</div>
            <h3 style={{ fontSize: "1.4rem", fontWeight: "800", marginBottom: "15px", color: "var(--primary-color)" }}>Connect With Us</h3>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto 20px auto" }}>
              For any volunteering service or any helping program or visit you can directly connect with snehatheeram care home.
            </p>
            <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary">
                Contact & Find Us
              </Link>
              <a href="tel:+914842607777" className="btn btn-secondary">
                Call Office
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
