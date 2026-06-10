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
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                Instagram
              </a>
              <a
                href="https://www.facebook.com/SnehatheeramCamillians"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className={styles.socialIcon}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </a>
              <a
                href="https://www.threads.net/@snehatheeramcamillians"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Threads"
                className={styles.socialIcon}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M13.23 11.72c-.78 0-1.42.53-1.42 1.3 0 .73.57 1.25 1.36 1.25.79 0 1.43-.53 1.43-1.28 0-.74-.59-1.27-1.37-1.27zm-1-9.47C6.18 2.25 1.5 6.8 1.5 12.5s4.68 10.25 10.73 10.25c2.41 0 4.62-.77 6.43-2.11l-1.46-1.92c-1.4.95-3.1 1.49-4.97 1.49-4.59 0-8.15-3.42-8.15-7.71s3.56-7.71 8.15-7.71c4.32 0 7.84 3.16 8.12 7.32-.47-.32-1.07-.52-1.74-.52-1.74 0-3.15 1.42-3.15 3.16 0 1.75 1.41 3.16 3.15 3.16.89 0 1.69-.37 2.26-1 .24 1.13.79 2.06 1.63 2.76 1.05.88 2.5 1.34 4.09 1.34.42 0 .84-.03 1.25-.09l-.42-2.52c-.25.04-.51.06-.77.06-.94 0-1.83-.28-2.43-.78-.51-.43-.8-.99-.92-1.68l-.06-.34.33-.12c1.23-.46 2.07-1.6 2.07-2.92.01-4.83-3.69-8.47-8.91-8.47z"/></svg>
                Threads
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
          <div>
            <p className={styles.copyright}>
              &copy; {currentYear} Snehatheeram St. Camillus Care Home. All Rights Reserved. Managed under Sneha Charitable Trust.
            </p>
            <p style={{ fontSize: "0.8rem", color: "#cbd5e1", marginTop: "6px" }}>
              Designed and Developed by <a href="https://alanova.ai" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-color)", fontWeight: "600", textDecoration: "underline" }}>Alanova.ai</a>
            </p>
          </div>
          <p className={styles.author}>
            In Service of the Sick & Destitute
          </p>
        </div>
      </div>
    </footer>
  );
}
