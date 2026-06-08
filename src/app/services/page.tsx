import Image from "next/image";
import Link from "next/link";
import styles from "./services.module.css";

export default function Services() {
  return (
    <div className={styles.servicesPage}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.title}>Care Programs & Services</h1>
          <p className={styles.subtitle}>
            A comprehensive, patient-centered approach to healthcare, residential shelter, and social reintegration.
          </p>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="container">
        <div className={styles.servicesContainer}>
          {/* Service 1: Elderly Care */}
          <div id="elderly" className={styles.serviceCard}>
            <div className={styles.content}>
              <span className={styles.categoryTag}>Residential Care</span>
              <h2 className={styles.serviceTitle}>Elderly & Destitute Care</h2>
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

          {/* Service 2: PLHIV Support */}
          <div id="plhiv" className={styles.serviceCard}>
            <div className={styles.content}>
              <span className={styles.categoryTag}>Medical support</span>
              <h2 className={styles.serviceTitle}>PLHIV Care & Treatment</h2>
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
                src="/images/slide_bg.jpg"
                alt="PLHIV Support and Medical Care"
                width={500}
                height={350}
                className={styles.serviceImage}
              />
            </div>
          </div>

          {/* Service 3: NANMA Outreach */}
          <div id="outreach" className={styles.serviceCard}>
            <div className={styles.content}>
              <span className={styles.categoryTag}>Community Ministry</span>
              <h2 className={styles.serviceTitle}>&quot;NANMA&quot; Outreach & Palliative Care</h2>
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

          {/* Service 4: Counseling */}
          <div id="counseling" className={styles.serviceCard}>
            <div className={styles.content}>
              <span className={styles.categoryTag}>Mental Well-being</span>
              <h2 className={styles.serviceTitle}>Counseling & Therapy</h2>
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
                src="/images/parallax_bg.jpg"
                alt="Psychological Counseling and Therapy"
                width={500}
                height={350}
                className={styles.serviceImage}
              />
            </div>
          </div>

          {/* Service 5: Hair Donation */}
          <div id="hair-donation" className={styles.serviceCard}>
            <div className={styles.content}>
              <span className={styles.categoryTag}>Kesadhanam Drive</span>
              <h2 className={styles.serviceTitle}>Kesadhanam (Hair Donation)</h2>
              <p className={styles.description}>
                To restore hope and dignity to cancer survivors, Snehatheeram facilitates the <strong>Kesadhanam Hair Donation Program</strong>. Donated hair is processed and crafted into premium, natural-hair wigs, which are then distributed entirely free of cost to terminally ill cancer patients undergoing chemotherapy.
              </p>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>✓</span> <strong>Restoring Confidence:</strong> Helping cancer patients overcome the psychological trauma of hair loss.
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>✓</span> <strong>Free Wig Distribution:</strong> Gifting custom-made natural wigs to patients who cannot afford them.
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>✓</span> <strong>Donation Guidelines:</strong> Accept healthy hair with a minimum length of 10 inches, washed, dried, and tied in braids.
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.bullet}>✓</span> <strong>Community Partnership:</strong> Collaborating with local salons, schools, and colleges for organized hair collection drives.
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
        </div>
      </section>

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
}
