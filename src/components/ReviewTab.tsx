import React from 'react';
import styles from './reviewTab.module.css';

export interface Review {
  author: string;
  rating: number; // out of 5
  text: string;
}

interface ReviewTabProps {
  reviews: Review[];
}

const ReviewTab: React.FC<ReviewTabProps> = ({ reviews }) => {
  return (
    <section className={styles.reviewSection}>
      <h2 className={styles.title}>Google Reviews</h2>
      <div className={styles.reviewList}>
        {reviews.map((review, idx) => (
          <div key={idx} className={styles.reviewCard}>
            <p className={styles.reviewText}>"{review.text}"</p>
            <p className={styles.reviewAuthor}>- {review.author}</p>
            <p className={styles.reviewRating}>
              Rating: {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewTab;
