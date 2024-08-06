export interface FAQItem {
  _id: number;
  question: string;
  answer: string;
}

export interface GameFAQs {
  faqs: FAQItem[];
}

export interface FAQBoost {
  "league-of-legends": GameFAQs;
  valorant: GameFAQs;
  "team-fight-tactics": GameFAQs;
}
