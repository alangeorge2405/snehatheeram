"use client";

import { useState } from "react";
import styles from "./contact.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

export default function Contact() {
  // FAQs
  const faqData: FAQItem[] = [
    {
      question: "Can I visit the care home?",
      answer: "Yes, visitors are very welcome at Snehatheeram. However, we request that you contact our Director in advance to schedule your visit. This helps us ensure that visits do not disrupt the rest periods, therapy sessions, and medical schedules of our residents.",
    },
    {
      question: "How are residents admitted to Snehatheeram?",
      answer: "Admissions are based on vulnerability and clinical evaluation. We prioritize elderly individuals who have been abandoned, destitute seniors without family support, and individuals living with HIV who require palliative care and rehabilitation. Please contact our administrative office to discuss candidate assessments.",
    },
    {
      question: "Are donations tax-exempt in India?",
      answer: "Yes, Snehatheeram operates under the Sneha Charitable Trust. All domestic contributions are eligible for a 50% tax deduction under Section 80G of the Income Tax Act. We will mail or email your official tax receipt and certificate shortly after the transfer is confirmed.",
    },
    {
      question: "Can I sponsor a meal on a specific day (like a birthday)?",
      answer: "Yes, sponsoring a meal to commemorate birthdays, wedding anniversaries, or the memory of loved ones is a very popular way to support us. You can select your date and meal tier (breakfast, normal, or special festal meal). Please reach out via our contact form or call us to reserve a specific date.",
    },
  ];

  // FAQ expanded state
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
  };

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Construct formatted WhatsApp text
        const waText = `*New Inquiry via Snehatheeram Website*\n\n` +
          `• *Name:* ${formData.name}\n` +
          `• *Email:* ${formData.email}\n` +
          `• *Phone:* ${formData.phone || "Not provided"}\n` +
          `• *Subject:* ${formData.subject}\n\n` +
          `*Message:*\n${formData.message}`;

        const waUrl = `https://wa.me/919205340595?text=${encodeURIComponent(waText)}`;
        
        // Directly redirect to WhatsApp number in the same tab
        window.location.href = waUrl;

        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "General Inquiry",
          message: "",
        });
      } else {
        alert(data.error || "Failed to submit message. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Network error. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contactPage}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>
            Have questions about admissions, sponsorships, or volunteering? Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Grid details */}
      <section className="section">
        <div className={`${styles.grid} container`}>
          {/* Left Column: Form */}
          <div className={styles.formCard}>
            <h2 className={styles.sectionTitle}>Send Us a Message</h2>

            {isSubmitted && (
              <div className={styles.successBanner}>
                <span className={styles.successTitle}>Message Sent Successfully!</span>
                <p>Thank you for reaching out to Snehatheeram. Our administrative team will review your inquiry and get back to you shortly.</p>
                <button
                  className="btn btn-secondary btn-sm"
                  style={{ alignSelf: "center", marginTop: "10px" }}
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            )}

            {!isSubmitted && (
              <form onSubmit={handleSubmit} noValidate>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={styles.input}
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                  />
                  {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.input}
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                  />
                  {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={styles.input}
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number (optional)"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    className={styles.select}
                    value={formData.subject}
                    onChange={handleInputChange}
                  >
                    <option>General Inquiry</option>
                    <option>Admissions</option>
                    <option>Sponsorship / Donations</option>
                    <option>Volunteering</option>
                    <option>Material Donation Delivery</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className={styles.textarea}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="How can we help you?"
                  />
                  {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={isSubmitting}
                  style={{ marginTop: "10px" }}
                >
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Info details */}
          <div className={styles.infoCol}>
            <div className={styles.infoCard}>
              <h2 className={styles.sectionTitle}>Direct Contacts</h2>

              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Location Address</span>
                <span className={styles.infoValue}>
                  St. Camillus Care Home,<br />
                  West Kadungalloor P.O., Aluva – 683 110,<br />
                  Ernakulam District, Kerala, India
                </span>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Phone Contacts</span>
                <span className={styles.infoValue}>
                  Office Landline: <a href="tel:+914842607777">+91 484 2607777</a><br />
                  Director Biju Sebastian: <a href="tel:+919886570340">+91 9886570340</a>
                </span>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email Address</span>
                <span className={styles.infoValue}>
                  <a href="mailto:snehatheeram.carehome@gmail.com">snehatheeram.carehome@gmail.com</a>
                </span>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Working Hours</span>
                <span className={styles.infoValue}>
                  Monday – Saturday: 9:00 AM – 5:00 PM<br />
                  Sunday: Closed (Except emergencies)
                </span>
              </div>
            </div>

            {/* Map representation */}
            <div className={styles.mapPlaceholder}>
              <span className="style={{fontSize: '2.5rem'}}">📍</span>
              <span className={styles.mapTitle}>Find Us in Aluva</span>
              <p className={styles.mapDesc}>
                Located at West Kadungalloor, near Aluva town, Ernakulam District. Conveniently accessible via the Aluva Metro Station and NH 544.
              </p>
              <a
                href="https://maps.google.com/?q=Snehatheeram+St+Camillus+Care+Home+Aluva"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                style={{ width: "100%" }}
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className={`${styles.faqSection} section`}>
        <div className="container">
          <div className={styles.faqTitleContainer}>
            <span className={styles.infoLabel} style={{ textAlign: "center", display: "block" }}>Common Questions</span>
            <h2 className={styles.sectionTitle} style={{ textAlign: "center" }}>Frequently Asked Questions</h2>
          </div>

          <div className={styles.faqGrid}>
            {faqData.map((faq, index) => {
              const isExpanded = expandedFaqIndex === index;
              return (
                <div key={index} className={styles.faqCard}>
                  <button
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isExpanded}
                  >
                    <span>{faq.question}</span>
                    <span>{isExpanded ? "−" : "+"}</span>
                  </button>
                  {isExpanded && (
                    <div className={styles.faqAnswer}>
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
