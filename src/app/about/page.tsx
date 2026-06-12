import Image from "next/image";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.aboutPage}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.title}>About Snehatheeram</h1>
          <p className={styles.subtitle}>
            A testament to extreme charity, loving kindness, and the preservation of human dignity in Aluva, Kerala.
          </p>
        </div>
      </section>

      {/* History section */}
      <section className="section">
        <div className={`${styles.gridTwoCol} container`}>
          <div className={styles.aboutText}>
            <span className={styles.sectionLabel}>Our Roots</span>
            <h2 className={styles.sectionTitle}>The Story of Snehatheeram</h2>
            <p className={styles.paragraph}>
              Snehatheeram, which translates to <strong>&quot;A Shore of Love&quot;</strong>, was founded in 2004 in West Kadungalloor, Aluva. It was established by the <strong>Sneha Charitable Trust</strong>, a healthcare initiative created by the <strong>Camillians</strong> (Order of the Ministers of the Infirm) in India.
            </p>
            <p className={styles.paragraph}>
              Originally, Snehatheeram was established specifically as a care and support center for People Living with HIV/AIDS (PLHIV). In 2004, HIV was accompanied by severe social stigma, causing many sufferers to be rejected by their families and communities. Snehatheeram stepped in to offer a safe shelter, nutritious food, professional counseling, and comprehensive palliative medical treatments.
            </p>
            <p className={styles.paragraph}>
              As the medical landscape of HIV treatment evolved with antiretroviral therapy (ART) and social stigma began to ease, Snehatheeram opened its doors to a broader population in need. Today, it operates as a full-fledged care facility offering housing, healthcare, and dignified lives to the elderly destitute, abandoned individuals, and terminally ill patients.
            </p>
          </div>
          <div className={styles.imageCard}>
            <Image
              src="/images/about_bg.jpg"
              alt="Snehatheeram Care Home Community"
              width={600}
              height={450}
              className={styles.cardImg}
            />
          </div>
        </div>
      </section>

      {/* Charism section */}
      <section className={`${styles.charismSection} section`}>
        <div className={`${styles.gridTwoCol} container`}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className={styles.imageCard}>
              <Image
                src="/images/st_camillus.png"
                alt="Portrait of St. Camillus de Lellis"
                width={600}
                height={450}
                className={styles.cardImg}
              />
            </div>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)", boxShadow: "var(--shadow-sm)" }}>
              <iframe
                src="https://www.youtube.com/embed/uioFKI7PqCI"
                title="Saint Camillus de Lellis Video"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className={styles.charismBox}>
            <span className={styles.sectionLabel}>The Camillian Charism</span>
            <h2 className={styles.sectionTitle}>Serving the Sick</h2>
            <p className={styles.paragraph}>
              The Camillians are members of an international Roman Catholic religious order founded in the 16th century by <strong>St. Camillus de Lellis</strong>. St. Camillus dedicated his life to reforming hospital care and tending to the sick, establishing a charism of serving the infirm with unconditional love.
            </p>
            <p className={styles.paragraph}>
              The symbol of the Order is a large <strong>Red Cross</strong>, worn on their cassocks, which was granted by Pope Sixtus V to represent their devotion to serving those in physical suffering.
            </p>
            <blockquote className={styles.quoteBox}>
              <p className={styles.quoteText}>
                &quot;Serve the sick with the same tenderness that a loving mother shows to her only child when he is suffering.&quot;
              </p>
              <cite className={styles.quoteAuthor}>— St. Camillus de Lellis</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className={`${styles.valuesSection} section`}>
        <div className="container">
          <div className={styles.sectionTitleContainer}>
            <span className={styles.sectionLabel}>Guided By Values</span>
            <h2 className={styles.sectionTitle}>Our Core Values</h2>
          </div>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>❤</div>
              <h3 className={styles.valueTitle}>Compassion</h3>
              <p className={styles.valueDescription}>
                Providing comforting, motherly care that extends beyond physical medicine to heal the spirit and mind.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🌟</div>
              <h3 className={styles.valueTitle}>Dignity</h3>
              <p className={styles.valueDescription}>
                Affirming the worth and sacredness of every resident, regardless of their age, disease, or background.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h3 className={styles.valueTitle}>Inclusivity</h3>
              <p className={styles.valueDescription}>
                Opening our doors to the most marginalized, forgotten, andstigmatized members of our society.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🛡</div>
              <h3 className={styles.valueTitle}>Integrity</h3>
              <p className={styles.valueDescription}>
                Running all our care homes, programs, and donation allocations with the highest ethical and transparent standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className={`${styles.leadershipSection} section`}>
        <div className="container">
          <div className={styles.sectionTitleContainer}>
            <span className={styles.sectionLabel}>Snehatheeram Leadership</span>
            <h2 className={styles.sectionTitle}>Director & Administrator</h2>
            <p className={styles.paragraph} style={{ maxWidth: "600px", margin: "12px auto 0", textAlign: "center" }}>
              Snehatheeram is guided by the Camillian Fathers, who coordinate clinical, spiritual, and physical care networks.
            </p>
          </div>
          <div className={styles.teamGrid}>
            {/* Trustee 1 */}
            <div className={styles.teamCard}>
              <div className={styles.teamImgWrapper}>
                <Image
                  src="/images/fr_teji.jpeg"
                  alt="Fr. Teji Thomas Anickattuvayalil MI"
                  width={400}
                  height={350}
                  className={styles.teamImg}
                />
              </div>
              <div className={styles.teamMeta}>
                <h3 className={styles.teamName}>Fr. Teji Thomas Anickattuvayalil MI</h3>
                <span className={styles.teamRole}>Director, Snehatheeram</span>
              </div>
            </div>

            {/* Trustee 2 */}
            <div className={styles.teamCard}>
              <div className={styles.teamImgWrapper}>
                <Image
                  src="/images/fr_vince.jpeg"
                  alt="Fr. Vince Koyikkal MI"
                  width={400}
                  height={350}
                  className={styles.teamImg}
                />
              </div>
              <div className={styles.teamMeta}>
                <h3 className={styles.teamName}>Fr. Vince Koyikkal MI</h3>
                <span className={styles.teamRole}>Administrator, Snehatheeram</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
