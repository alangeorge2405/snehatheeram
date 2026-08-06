import Image from "next/image";
import Link from "next/link";
import styles from "./services.module.css";
import ReviewTab from "@/components/ReviewTab";
import TabContainer from "@/components/TabContainer";
import { fetchGoogleReviews } from "@/lib/googleReviews";

export const dynamic = "force-static"; // ensure static generation
export const revalidate = 86400; // refresh daily

export default async function Services() {
  const reviews = await fetchGoogleReviews();

  // PANEL 1: Care Programs & Services
  const servicesPanel = (
    <div className={styles.servicesPage}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.title}>Care Programs &amp; Services</h1>
          <p className={styles.subtitle}>
            A comprehensive, patient‑centered approach to healthcare, residential shelter, and social reintegration.
          </p>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="container">
        <div className={styles.servicesContainer}>
          {/* Camillian Family Section */}
          <div className={styles.camillianFamilySection}>
            <div className={styles.familyGrid}>
              <div className={styles.content}>
                <span className={styles.categoryTagLay}>Lay Association</span>
                <h2 className={styles.serviceTitle}>Camillian Family – Snehatheeram, Aluva</h2>
                
                <p className={styles.description}>
                  The Camillian Family is an association of lay people who share in the spirituality, charism, and mission of Saint Camillus de Lellis, the Patron Saint of the Sick, Hospitals, Nurses, and Health Care Workers. Inspired by his example of compassionate service, members seek to make present the healing love of Christ among those who suffer.
                </p>
                
                <p className={styles.description}>
                  The Camillian Family at Snehatheeram, Aluva is an active community of men and women committed to both spiritual growth and charitable service. Members reach out to the sick, elderly, and dying through visits, listening with compassion, offering spiritual support, and providing practical assistance whenever possible. They strive to be a sign of God&apos;s tenderness and mercy to those who are experiencing illness, loneliness, or distress.
                </p>
                
                <p className={styles.description}>
                  Each month, the members gather at Snehatheeram for prayer, reflection on the Word of God, formation in Camillian spirituality, and discussions on how to better serve those in need. These gatherings strengthen the bonds of friendship, faith, and service among the members and renew their commitment to the Camillian mission.
                </p>

                <p className={styles.description}>
                  St. Camillus taught that the sick are the living image of Christ and should be served with love and reverence. His famous exhortation continues to inspire us:
                </p>

                <div className={styles.joinUsBox} style={{ marginTop: "30px" }}>
                  <h3 className={styles.joinUsTitle}>Join Us</h3>
                  <p className={styles.joinUsText}>
                    Are you looking to deepen your spiritual life, grow in the spirit of St. Camillus, and share the compassionate love of Jesus with the sick and dying?
                  </p>
                  <p className={styles.joinUsText}>
                    We warmly invite you to become part of the Camillian Family at Snehatheeram. Together, we journey in faith, prayer, and service, discovering Christ in those who suffer and bringing His healing presence to the world.
                  </p>
                  <Link href="/contact" className={styles.joinUsBtn}>
                    Contact Us to Join
                  </Link>

                  <div className={styles.bibleQuote}>
                    &ldquo;As often as you did it to one of these least brothers and sisters of mine, you did it to me.&rdquo;
                    <span className={styles.bibleQuoteAuthor}>— Matthew 25:40</span>
                  </div>
                </div>
              </div>

              <div className={styles.familyImageGrid}>
                <Image
                  src="/images/camillian_family_group.jpeg"
                  alt="Camillian Family members group photo at Snehatheeram, Aluva"
                  width={800}
                  height={600}
                  className={styles.gridImage}
                />
                <Image
                  src="/images/camillian_family_portraits.jpeg"
                  alt="St. Camillus de Lellis portraits at Snehatheeram ceremony"
                  width={800}
                  height={600}
                  className={styles.gridImage}
                />
              </div>
            </div>
          </div>

          {/* Service 1: Hair Donation */}
          <div id="hair-donation" className={styles.serviceCard}>
            <div className={styles.content}>
              <span className={styles.categoryTag}>Hair Donation Drive</span>
              <h2 className={styles.serviceTitle}>Donate Hair &amp; Support Cancer Survivors</h2>
              <p className={styles.description}>
                Are you interested in donating your hair? To support cancer survivors in their healing journey, Snehatheeram facilitates the <strong>Hair Donation Program</strong> in collaboration with <strong>Amala Hospital, Thrissur</strong>. Snehatheeram acts as the collection hub in Aluva, gathering healthy hair donations and handing them over to Amala Hospital, where they are crafted into custom natural wigs and distributed to cancer patients undergoing chemotherapy.
              </p>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>✓</span> <strong>Amala Hospital Collaboration:</strong> A joint venture between Snehatheeram (Camillians, Aluva) and Amala Hospital (Thrissur) to support cancer care.
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>✓</span> <strong>Local Collection:</strong> We collect the hair donations at our Aluva center and deliver them to Amala Hospital for wig manufacturing.
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>✓</span> <strong>Hospital Distribution:</strong> Wigs are distributed directly to cancer patients undergoing chemotherapy at Amala Hospital.
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>✓</span> <strong>Donation Guidelines:</strong> We accept clean, dry, and healthy hair with a minimum length of 10 inches, secured in a ponytail or braid.
                </li>
              </ul>
            </div>
            <div className={styles.imageGridTwoCol}>
              <Image
                src="/images/hair_donation.png"
                alt="Beautifully braided lock of donated hair"
                width={250}
                height={350}
                className={styles.gridImage}
              />
              <Image
                src="/images/hair_cutting.png"
                alt="Hair cutting session for cancer support donation"
                width={250}
                height={350}
                className={styles.gridImage}
              />
            </div>
          </div>

          {/* Service 2: Elderly Care */}
          <div id="elderly" className={styles.serviceCard}>
            <div className={styles.content}>
              <span className={styles.categoryTag}>Residential Care</span>
              <h2 className={styles.serviceTitle}>Elderly &amp; Destitute Care</h2>
              <p className={styles.description}>
                Snehatheeram provides a warm, loving home environment for elderly individuals who have been abandoned, neglected, or left without financial resources. We focus on healing not just physical ailments, but the pain of loneliness.
              </p>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>✓</span> Comfortable, clean shared residential housing with assisted living features.
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>✓</span> Highly nutritious, freshly cooked meals tailored to seniors&apos; health and medical restrictions.
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>✓</span> Round-the-clock nursing staff and caregivers managing hygiene, medications, and mobility.
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>✓</span> Social engagement: festival celebrations, prayer meetings, group reading, and gentle exercise.
                </li>
              </ul>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/images/snehatheeram_aluva.jpg"
                alt="Elderly Residential Care at Snehatheeram"
                width={500}
                height={350}
                className={styles.serviceImage}
              />
            </div>
          </div>

          {/* Service 3: PLHIV Support */}
          <div id="plhiv" className={styles.serviceCard}>
            <div className={styles.content}>
              <span className={styles.categoryTag}>Medical support</span>
              <h2 className={styles.serviceTitle}>PLHIV Care &amp; Treatment</h2>
              <p className={styles.description}>
                Founded at a time of severe crisis, Snehatheeram has two decades of experience providing specialized, compassionate support for People Living with HIV/AIDS (PLHIV) who have faced rejection and trauma.
              </p>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>✓</span> Management of Opportunistic Infections (OI) and medical emergencies in coordination with regional medical centers.
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>✓</span> Strict medication management and adherence counseling to maximize the efficacy of Antiretroviral Therapy (ART).
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>✓</span> Immune-boosting specialized diets, physical therapy, and restorative wellness.
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>✓</span> Reintegration: building skills and confidence for residents to transition back into community life.
                </li>
              </ul>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/images/plhiv_support.png"
                alt="PLHIV Support and Medical Care"
                width={500}
                height={350}
                className={styles.serviceImage}
              />
            </div>
          </div>

          {/* Service 4: NANMA Outreach */}
          <div id="outreach" className={styles.serviceCard}>
            <div className={styles.content}>
              <span className={styles.categoryTag}>Community Ministry</span>
              <h2 className={styles.serviceTitle}>&quot;NANMA&quot; Outreach &amp; Palliative Care</h2>
              <p className={styles.description}>
                For the sick, elderly, and terminally ill who cannot move into our residential centers, our specialized &quot;NANMA&quot; outreach team brings compassionate home-based care and support directly to their doorsteps.
              </p>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>✓</span> Regular home visits by qualified nurses and trained volunteers to change dressings, monitor vitals, and coordinate clinical care.
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>✓</span> Distribution of free medical supply kits, prescription medicines, and adult diapers to low-income families.
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>✓</span> Grocery kits containing rice, pulses, cooking oils, and general toiletries for the entire household.
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>✓</span> Educational scholarships and supply assistance for the children of chronical illness patients.
                </li>
              </ul>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/images/about_bg.jpg"
                alt="NANMA Community Palliative Care Outreach"
                width={500}
                height={350}
                className={styles.serviceImage}
              />
            </div>
          </div>

          {/* Service 5: Counseling */}
          <div id="counseling" className={styles.serviceCard}>
            <div className={styles.content}>
              <span className={styles.categoryTag}>Mental Well-being</span>
              <h2 className={styles.serviceTitle}>Counseling &amp; Therapy</h2>
              <p className={styles.description}>
                Physical health is only one aspect of well-being. Snehatheeram offers dedicated psychological counseling services to help residents, outpatients, and families overcome mental, emotional, and relational trauma.
              </p>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>✓</span> Individual clinical counseling to help residents manage depression, anxiety, grief, and feelings of abandonment.
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>✓</span> Couple and family therapy sessions designed to resolve relational conflicts and facilitate family reconciliation.
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>✓</span> Group therapy and mindfulness sessions to foster community, shared strength, and mutual care within the care home.
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>✓</span> Stress management and emotional support programs for caregivers and outreach volunteers.
                </li>
              </ul>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/images/counseling_session.png"
                alt="Psychological Counseling and Therapy"
                width={500}
                height={350}
                className={styles.serviceImage}
              />
            </div>
          </div>

          {/* Service 6: Ambulance Services */}
          <div id="ambulance" className={styles.serviceCard}>
            <div className={styles.content}>
              <span className={styles.categoryTag}>Emergency support</span>
              <h2 className={styles.serviceTitle}>Ambulance &amp; Emergency Transport</h2>
              <p className={styles.description}>
                Snehatheeram operates a dedicated ambulance service to provide prompt, safe, and comfortable medical transit for our residents and palliative outreach patients who require urgent or routine hospital care.
              </p>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>✓</span> <strong>Emergency Response:</strong> 24/7 medical transport for residents facing critical health updates or acute clinical emergencies.
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>✓</span> <strong>Hospital Transfers:</strong> Scheduled transit to regional hospitals, clinics, and diagnostics centers for consultations, dialysis, or therapies.
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>✓</span> <strong>Palliative Transit:</strong> Assisting mobility-challenged and bedridden palliative patients under our home care network.
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>✓</span> <strong>Charitable Operation:</strong> Provided completely free of charge to all destitute seniors, terminally ill, and underprivileged patients.
                </li>
              </ul>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/images/ambulance_service.png"
                alt="Ambulance and Patient Transport Services"
                width={500}
                height={350}
                className={styles.serviceImage}
              />
            </div>
          </div>
        </div>
      </section>

      <ReviewTab reviews={reviews} />

      {/* Call to Action Section */}
      <section className={`${styles.bottomCta} section`}>
        <div className={`${styles.ctaBox} container`}>
          <h2 className={styles.ctaTitle}>Support Our Care Programs</h2>
          <p className={styles.ctaText}>
            Our medical care, food distribution, and palliative visits are only possible through the generosity of donors. Explore how you can sponsor these specific programs or materials to keep these vital services running.
          </p>
          <div style={{ display: "flex", gap: "16px", marginTop: "12px" }}>
            <Link href="/donate" className="btn btn-primary">
              Sponsor a Program
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );

  // PANEL 2: Holistic Care Centre (Greenish Touch)
  const holisticPanel = (
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

  return (
    <TabContainer
      servicesPanel={servicesPanel}
      holisticPanel={holisticPanel}
    />
  );
}
