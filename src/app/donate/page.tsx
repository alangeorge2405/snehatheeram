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
            Snehatheeram currently provides residential care for **12 residents**. Including our dedicated nursing, cooking, and administrative staff, the total strength of our household is **15 to 17 people** daily.
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

      {/* Bank Transfer Details Section */}
      <section id="bank-details" className={`${styles.bankSection} section`}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 className={styles.sectionTitle}>Bank Transfer Details</h2>
            <p className={styles.subtitle}>
              Please perform a direct bank transfer (IMPS, NEFT, RTGS, or International Wire) to the accounts listed below. All accounts are managed under the Sneha Charitable Trust.
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
                  <span className={styles.bankLabel}>Account Number</span>
                  <span className={styles.bankValue}>0022053000021481</span>
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
                  <span className={styles.bankLabel}>FCRA Account Number</span>
                  <span className={styles.bankValue}>0022053000099882</span>
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
        </div>
      </section>
    </div>
  );
}
