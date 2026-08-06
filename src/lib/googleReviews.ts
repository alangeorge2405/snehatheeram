export interface Review {
  author: string;
  rating: number; // out of 5
  text: string;
}

// Simulated static fetch of top Google reviews.
export async function fetchGoogleReviews(): Promise<Review[]> {
  // In a real scenario, you would call Google Places API here.
  // For now we return a static array of review objects.
  return [
    {
      author: "Jayasree Anilkumar",
      rating: 5,
      text: "Thanks a lot for the team, Priests, and Volunteers for the support. Really it's a SNEHATHEERAM.",
    },
    {
      author: "SUMESH K R",
      rating: 5,
      text: "Home for Sick and needy. Holistic Health Care Centre.",
    },
    {
      author: "Albin Benny",
      rating: 5,
      text: "Wonderful place of grace and love with people of love and care... Always open to charity and compassion.",
    },
  ];
}

