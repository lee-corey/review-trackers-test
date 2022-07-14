export type Review = {
  id: string;
  author: string;
  place: string;
  published_at: string;
  rating: number;
  content: string;
};

export type Response = {
  reviewId: string;
  author: string;
  content: string;
  published_at: string;
};
