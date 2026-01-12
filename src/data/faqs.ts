/**
 * FAQ Data
 * 
 * Frequently asked questions for Lapland Famille.
 * Optimized for family-specific concerns and SEO.
 */

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'travel' | 'children' | 'activities' | 'accommodation' | 'safety';
}

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'What age is appropriate for children to visit Lapland?',
    answer: 'Children of all ages can enjoy Lapland! For our family packages, we recommend children aged 3 and above for the best experience. Infants and toddlers are welcome but may not fully engage with all activities. Our Santa Express Weekend is particularly popular for younger children (ages 3-7), while the Arctic Adventure Week suits families with children aged 7 and above.',
    category: 'children'
  },
  {
    id: 'faq-2',
    question: 'How cold will it be, and what should we pack?',
    answer: 'Lapland temperatures typically range from -5°C to -25°C in winter. Don\'t worry though - we provide high-quality thermal suits, boots, gloves, and hats for all activities. You just need to bring warm layers (thermal underwear, fleece), comfortable indoor clothes, and your personal items. We\'ll send a detailed packing list before your trip.',
    category: 'travel'
  },
  {
    id: 'faq-3',
    question: 'Is it safe for children to do husky and snowmobile safaris?',
    answer: 'Absolutely! Safety is our top priority. All activities are led by experienced, certified guides. For husky safaris, children ride in the sled with a parent, or older children can help drive under supervision. For snowmobile safaris, adults drive while children ride safely in a heated sleigh pulled behind. All equipment is regularly inspected and maintained.',
    category: 'safety'
  },
  {
    id: 'faq-4',
    question: 'What is your cancellation policy?',
    answer: 'We understand plans can change, especially with families. Our standard cancellation policy offers: Full refund (minus £100 admin fee) if cancelled more than 60 days before departure; 50% refund for cancellations 30-60 days before; No refund within 30 days of departure. We strongly recommend comprehensive travel insurance, which we can help arrange.',
    category: 'booking'
  },
  {
    id: 'faq-5',
    question: 'Are the Santa meetings private or with other families?',
    answer: 'Each family enjoys a private, intimate meeting with Santa in his cozy forest cabin. This is not a rushed "conveyor belt" experience - you\'ll have quality time with Father Christmas, who will know your children\'s names and talk with them personally. Every child receives a special gift. It\'s a magical, unhurried experience.',
    category: 'activities'
  },
  {
    id: 'faq-6',
    question: 'What if we don\'t see the Northern Lights?',
    answer: 'The Northern Lights are a natural phenomenon and cannot be guaranteed. However, December to March offers the best viewing conditions in Lapland. Our guides use real-time aurora forecasts and know the best local spots. Some packages include multiple aurora hunting opportunities to increase your chances. The good news is that Lapland offers incredible experiences even without the lights!',
    category: 'activities'
  },
  {
    id: 'faq-7',
    question: 'Are meals suitable for children and dietary requirements?',
    answer: 'Yes! All our packages include child-friendly meal options. Finnish Lapland cuisine features delicious local ingredients, but we always have familiar options available for picky eaters. Please inform us of any dietary requirements (vegetarian, vegan, allergies, etc.) when booking, and our chefs will accommodate all needs.',
    category: 'accommodation'
  },
  {
    id: 'faq-8',
    question: 'How do we get to Lapland from the UK?',
    answer: 'Most UK airports offer direct charter flights to Rovaniemi or Kittilä during the winter season. Flight time is approximately 3-3.5 hours. Some packages include flights from major UK airports. If flights are not included, we\'ll help you find the best options and arrange all transfers from the airport to your accommodation.',
    category: 'travel'
  },
  {
    id: 'faq-9',
    question: 'Is there Wi-Fi and phone signal in Lapland?',
    answer: 'Yes, all our accommodations have Wi-Fi, though speeds may be slower than you\'re used to at home. Mobile phone signal is generally good in and around resorts and villages, but can be patchy in remote wilderness areas. We encourage families to disconnect and enjoy quality time together, but understand you may need to stay connected.',
    category: 'accommodation'
  },
  {
    id: 'faq-10',
    question: 'Can grandparents or extended family join our trip?',
    answer: 'Absolutely! Multi-generational trips are wonderful. We can arrange adjacent cabins or connecting rooms, and our activities cater to all fitness levels. Some activities like snowmobile safaris have minimum age requirements, but alternatives are always available. Contact us to discuss your family\'s specific needs.',
    category: 'booking'
  }
];

export const getFAQsByCategory = (category: FAQ['category']): FAQ[] => {
  return faqs.filter(faq => faq.category === category);
};
