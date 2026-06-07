import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          {/* Column 1: Institution Info */}
          <div className={styles.infoCol}>
            <div className={styles.logoRow}>
              <Image
                src="/images/camillus_crest.jpg"
                alt="Camillian Crest"
                width={36}
                height={36}
                className={styles.footerLogo}
              />
              <span className={styles.footerBrandName}>Snehatheeram</span>
            </div>
            <p className={styles.disclaimer}>
              Snehatheeram (&quot;A Shore of Love&quot;) is a care and support center managed by the <strong>Sneha Charitable Trust</strong>, the social ministry of the Camillian Order (Ministers of the Infirm) in India. Established in 2004.
            </p>
            <div className={styles.socials}>
              <a
                href="https://www.instagram.com/snehatheeramcamillians/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className={styles.socialIcon}
              >
                Instagram
              </a>
              <a
                href="http://camilliansindia.org/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Camillians India"
                className={styles.socialIcon}
              >
                Camillians India
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Care Programs</Link>
              </li>
              <li>
                <Link href="/donate">Support Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Contact Info</h4>
            <div className={styles.contactItem}>
              <strong>Address:</strong>
              <p>St. Camillus Care Home, West Kadungalloor P.O., Aluva – 683 110, Ernakulam District, Kerala, India</p>
            </div>
            <div className={styles.contactItem}>
              <strong>Phone:</strong>
              <p>
                <a href="tel:+914842607777">+91 484 2607777</a><br />
                <a href="tel:+919886570340">+91 9886570340</a>
              </p>
            </div>
            <div className={styles.contactItem}>
              <strong>Email:</strong>
              <p>
                <a href="mailto:snehatheeram.carehome@gmail.com">snehatheeram.carehome@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {currentYear} Snehatheeram St. Camillus Care Home. All Rights Reserved. Managed under Sneha Charitable Trust.
          </p>
          <p className={styles.author}>
            In Service of the Sick & Destitute
          </p>
        </div>
      </div>
    </footer>
  );
}
