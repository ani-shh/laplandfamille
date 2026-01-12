/**
 * Testimonials Data
 * 
 * Customer reviews and testimonials for Lapland Famille.
 * In production, these would come from a review platform integration.
 */

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar?: string;
  rating: number;
  title: string;
  content: string;
  packageName: string;
  travelDate: string;
  familyType: string;
  verified: boolean;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 'review-1',
    name: 'Sarah & James Thompson',
    location: 'London, UK',
    avatar: '/images/testimonials/avatar-1.jpg',
    rating: 5,
    title: 'The most magical holiday we\'ve ever had',
    content: 'We took our two children (ages 5 and 8) on the Magical Family Escape and it exceeded all expectations. The look on their faces when they met Santa will stay with us forever. The husky ride was incredible, and the log cabin was so cozy. Lapland Famille thought of everything - the thermal suits, the perfect schedule for young kids, the amazing food. We\'re already planning our return trip!',
    packageName: 'Magical Family Escape',
    travelDate: 'December 2024',
    familyType: 'Family with 2 children',
    verified: true,
    featured: true
  },
  {
    id: 'review-2',
    name: 'Emily & Mark Roberts',
    location: 'Manchester, UK',
    avatar: '/images/testimonials/avatar-2.jpg',
    rating: 5,
    title: 'Perfect trip for our young family',
    content: 'We took our 3-year-old twins on the Santa Express Weekend and it was absolutely perfect. The pace was just right for toddlers - not too rushed, with plenty of downtime. Meeting Santa was the highlight - he was so patient and kind with the little ones. The elf workshop kept them entertained for hours! Lapland Famille really understands what families with young children need.',
    packageName: 'Santa Express Weekend',
    travelDate: 'December 2024',
    familyType: 'Family with toddlers',
    verified: true,
    featured: true
  },
  {
    id: 'review-3',
    name: 'David & Claire Mitchell',
    location: 'Birmingham, UK',
    avatar: '/images/testimonials/avatar-3.jpg',
    rating: 5,
    title: 'Incredible adventure for our active family',
    content: 'The Arctic Adventure Week was perfect for our family of thrill-seekers. Our teenagers (13 and 15) absolutely loved the snowmobile safari and ice fishing. The glass cabin was amazing - we saw the Northern Lights three times! The guides were fantastic and made sure everyone felt safe during all activities. Highly recommend for families with older children who love adventure.',
    packageName: 'Arctic Adventure Week',
    travelDate: 'February 2025',
    familyType: 'Family with 2 teenagers',
    verified: true,
    featured: true
  },
  {
    id: 'review-4',
    name: 'Rachel Green',
    location: 'Bristol, UK',
    avatar: '/images/testimonials/avatar-4.jpg',
    rating: 5,
    title: 'Best Santa experience ever',
    content: 'As a single mum, I was nervous about taking my 4-year-old alone, but Lapland Famille made everything so easy. The Santa Express Weekend was perfectly paced for young children, with lots of rest time built in. Meeting Santa was pure magic - he knew my daughter\'s name and her wish! The other families were lovely too. Can\'t recommend enough.',
    packageName: 'Santa Express Weekend',
    travelDate: 'December 2024',
    familyType: 'Single parent with child',
    verified: true,
    featured: false
  },
  {
    id: 'review-5',
    name: 'Michael & Sophie Anderson',
    location: 'Edinburgh, UK',
    avatar: '/images/testimonials/avatar-5.jpg',
    rating: 4,
    title: 'Wonderful winter memories',
    content: 'We brought our three kids and grandparents on the Magical Family Escape. Lapland Famille accommodated our large group brilliantly with two connected cabins. The reindeer farm was a highlight - the kids still talk about feeding them! Only reason for 4 stars is we wished we had more time. Will definitely book a longer trip next year.',
    packageName: 'Magical Family Escape',
    travelDate: 'January 2025',
    familyType: 'Multi-generational family',
    verified: true,
    featured: false
  },
  {
    id: 'review-6',
    name: 'Tom & Lisa Parker',
    location: 'Leeds, UK',
    avatar: '/images/testimonials/avatar-6.jpg',
    rating: 5,
    title: 'Northern Lights exceeded expectations',
    content: 'We took our three children hoping to see the Northern Lights and Lapland Famille delivered beyond our dreams. Our guide was incredibly knowledgeable and took us to the perfect spot. We saw the most amazing aurora display for over an hour - the kids were speechless! The glass cabin meant we could watch from our warm beds too. The whole experience was first class.',
    packageName: 'Arctic Adventure Week',
    travelDate: 'March 2025',
    familyType: 'Family with 3 children',
    verified: true,
    featured: false
  }
];

export const getFeaturedTestimonials = (): Testimonial[] => {
  return testimonials.filter(t => t.featured);
};

export const getTestimonialsByPackage = (packageName: string): Testimonial[] => {
  return testimonials.filter(t => t.packageName === packageName);
};
