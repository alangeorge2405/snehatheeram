import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import HeroBanner from "@/components/HeroBanner";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={`${styles.hero} animate-fade-in`}>
        <div className={`${styles.heroContainer} container`}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Aluva, Kerala</span>
            <h1 className={styles.heroTitle}>A Shore of Love, Care & Dignity</h1>
            <p className={styles.heroSubtitle}>
              Snehatheeram (&quot;A Shore of Love&quot;) is a sanctuary dedicated to providing shelter, 24/7 medical care, emotional counseling, and rehabilitation to the elderly, destitute, and individuals living with HIV/AIDS.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/donate" className="btn btn-primary">
                Support Our Mission
              </Link>
              <Link href="/services" className="btn btn-outline">
                Our Care Programs
              </Link>
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            <HeroBanner />
          </div>
        </div>
      </section>

      {/* Welcome & Mission Section */}
      <section className={`${styles.mission} section`}>
        <div className={`${styles.missionContent} container`}>
          <div className={styles.crestIcon}>
            <Image
              src="/images/camillus_crest.jpg"
              alt="Camillian Cross Crest"
              width={60}
              height={60}
            />
          </div>
          <span className={styles.sectionSubtitle}>Who We Are</span>
          <h2 className={styles.sectionTitle}>Restoring Hope & Well-being</h2>
          <p className={styles.missionText}>
            Established in 2004 under the <strong>Sneha Charitable Trust</strong>, Snehatheeram embodies the mission of the <strong>Camillian Order</strong> in India. Our sanctuary serves as a safe haven where the sick, terminally ill, and destitute find not just clinical care, but a family. Guided by the values of compassionate service, we aim to eliminate social stigma and ensure every individual lives their life in comfort and dignity.
          </p>
          <Link href="/about" className="btn btn-secondary" style={{ marginTop: "12px" }}>
            Read Our History
          </Link>
        </div>
      </section>

      {/* Charism Section */}
      <section className={`${styles.charismSection} section`}>
        <div className={`${styles.gridTwoCol} container`}>
          <div className={styles.imageCard}>
            <Image
              src="/images/st_camillus.png"
              alt="Portrait of St. Camillus de Lellis"
              width={600}
              height={450}
              className={styles.cardImg}
            />
          </div>
          <div className={styles.charismBox}>
            <span className={styles.sectionSubtitle} style={{ textAlign: "left", display: "block" }}>The Camillian Charism</span>
            <h2 className={styles.sectionTitle} style={{ textAlign: "left" }}>Serving the Sick</h2>
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

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>22+</div>
              <div className={styles.statLabel}>Years of Loving Service</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>150+</div>
              <div className={styles.statLabel}>Residents Cared For</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Outreach Palliative Families</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Medical & Nursing Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className={`${styles.pillars} section`}>
        <div className="container">
          <div className={styles.pillarsHeader}>
            <span className={styles.sectionSubtitle}>What We Do</span>
            <h2 className={styles.sectionTitle}>Our Core Pillars of Care</h2>
          </div>
          <div className={styles.pillarsGrid}>
            {/* Pillar 1: Hair Donation */}
            <div className={styles.pillarCardFullWidth}>
              <div className={styles.pillarIconContainer}>✂</div>
              <h3 className={styles.pillarTitle}>&quot;Kesadhanam&quot; Hair Donation</h3>
              <p className={styles.pillarDescription}>
                In collaboration with Amala Hospital, Thrissur, Snehatheeram collects hair donations in Aluva and hands them over to Amala Hospital, where they are crafted and distributed as natural wigs to cancer patients.
              </p>
              <Link href="/services#hair-donation" className={styles.pillarLink}>
                Learn More <span>→</span>
              </Link>
            </div>

            {/* Pillar 2: Elderly Care */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarIconContainer}>❤</div>
              <h3 className={styles.pillarTitle}>Elderly & Destitute Care</h3>
              <p className={styles.pillarDescription}>
                We provide a warm residential shelter, highly nutritious food, personal grooming, laundry services, and regular social activities for elderly individuals who have been abandoned or are destitute.
              </p>
              <Link href="/services#elderly" className={styles.pillarLink}>
                Learn More <span>→</span>
              </Link>
            </div>

            {/* Pillar 3: PLHIV Support */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarIconContainer}>✚</div>
              <h3 className={styles.pillarTitle}>PLHIV Support & Rehabilitation</h3>
              <p className={styles.pillarDescription}>
                Providing comprehensive healthcare support, opportunistic infection management, counseling, and social reintegration services to restore dignity and strength for People Living with HIV.
              </p>
              <Link href="/services#plhiv" className={styles.pillarLink}>
                Learn More <span>→</span>
              </Link>
            </div>

            {/* Pillar 4: NANMA Outreach */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarIconContainer}>🤝</div>
              <h3 className={styles.pillarTitle}>&quot;NANMA&quot; Outreach Program</h3>
              <p className={styles.pillarDescription}>
                Our specialized outreach team delivers regular home-based palliative care, essential medicine packages, groceries, and educational assistance to impoverished families suffering from chronic illness.
              </p>
              <Link href="/services#outreach" className={styles.pillarLink}>
                Learn More <span>→</span>
              </Link>
            </div>

            {/* Pillar 5: Counseling */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarIconContainer}>🗣</div>
              <h3 className={styles.pillarTitle}>Psychological Counseling</h3>
              <p className={styles.pillarDescription}>
                Offering professional individual, family, and group therapy sessions. Our clinical psychologists support residents in overcoming emotional trauma, depression, and social rejection.
              </p>
              <Link href="/services#counseling" className={styles.pillarLink}>
                Learn More <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Callout Section */}
      <section className={`${styles.callout} section`}>
        <div className={`${styles.calloutContainer} container`}>
          <h2 className={styles.calloutTitle}>Help Us Keep the Shore of Love Open</h2>
          <p className={styles.calloutText}>
            Snehatheeram runs entirely on the goodwill and contributions of compassionate individuals like you. Whether it is sponsoring a day&apos;s meal for our residents, providing medical packages, or volunteering your time, your support directly impacts a life.
          </p>
          <div className={styles.calloutButtons}>
            <Link href="/donate" className="btn btn-accent btn-lg">
              Donate / Sponsor Now
            </Link>
            <Link href="/contact" className="btn btn-outline btn-lg" style={{ borderColor: "#ffffff", color: "#ffffff" }}>
              Contact Our Director
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
