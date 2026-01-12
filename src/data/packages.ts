/**
 * Package Data
 * 
 * This file contains all package information for Lapland Famille.
 * In production, this data would come from a CMS or database.
 * 
 * SEO Note: Each package has structured data fields for Product/TouristTrip schema
 */

export interface Package {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  duration: string;
  durationNights: number;
  idealFor: ('families' | 'groups')[];
  accommodationType: string;
  accommodationDescription: string;
  activities: Activity[];
  difficulty: 'easy' | 'moderate' | 'challenging';
  skiRequired: boolean;
  price: {
    adult: number;
    child: number;
    infant: number;
    currency: string;
  };
  dates: {
    available: string[];
    soldOut: string[];
  };
  maxCapacity: number;
  spotsRemaining: number;
  highlights: string[];
  includes: string[];
  excludes: string[];
  images: {
    hero: string;
    gallery: string[];
  };
  rating: number;
  reviewCount: number;
  featured: boolean;
  new: boolean;
}

export interface Activity {
  name: string;
  description: string;
  duration: string;
  included: boolean;
  icon: string;
}

export const packages: Package[] = [
  {
    id: 'magical-family-escape',
    slug: 'magical-family-escape',
    name: 'Magical Family Escape',
    shortDescription: 'The perfect introduction to Lapland for families with young children',
    description: 'Experience the wonder of Finnish Lapland with our most popular family package. Designed specifically for families with children ages 3-12, this magical adventure combines exciting activities with plenty of rest time. Stay in cozy log cabins, meet Santa in his secret forest hideaway, and create memories that will last a lifetime.',
    duration: '4 days / 3 nights',
    durationNights: 3,
    idealFor: ['families'],
    accommodationType: 'Log Cabin',
    accommodationDescription: 'Authentic Finnish log cabin with private sauna, fully equipped kitchen, and stunning forest views. Each cabin accommodates up to 6 guests.',
    activities: [
      {
        name: 'Meet Santa Claus',
        description: 'Private family meeting with Santa in his enchanted forest cabin',
        duration: '1 hour',
        included: true,
        icon: 'santa'
      },
      {
        name: 'Husky Safari',
        description: 'Exciting husky sleigh ride through snowy forests',
        duration: '2 hours',
        included: true,
        icon: 'husky'
      },
      {
        name: 'Reindeer Farm Visit',
        description: 'Meet and feed friendly reindeer, learn about Sami culture',
        duration: '2 hours',
        included: true,
        icon: 'reindeer'
      },
      {
        name: 'Snowmobile Safari',
        description: 'Family-friendly snowmobile adventure (adults drive, children ride)',
        duration: '1.5 hours',
        included: true,
        icon: 'snowmobile'
      },
      {
        name: 'Northern Lights Hunt',
        description: 'Evening excursion to spot the Aurora Borealis',
        duration: '3 hours',
        included: false,
        icon: 'aurora'
      }
    ],
    difficulty: 'easy',
    skiRequired: false,
    price: {
      adult: 1899,
      child: 1499,
      infant: 299,
      currency: 'GBP'
    },
    dates: {
      available: ['Dec 2025', 'Jan 2026', 'Feb 2026', 'Mar 2026'],
      soldOut: ['Dec 20-23, 2025', 'Dec 27-30, 2025']
    },
    maxCapacity: 24,
    spotsRemaining: 8,
    highlights: [
      'Private Santa meeting with gift',
      'Family-friendly activities',
      'Cozy log cabin accommodation',
      'All meals included',
      'Airport transfers included'
    ],
    includes: [
      '3 nights log cabin accommodation',
      'Full board (breakfast, lunch, dinner)',
      'All activities listed as included',
      'Thermal clothing and boots',
      'Return airport transfers',
      'English-speaking guide',
      'Travel insurance available'
    ],
    excludes: [
      'International flights',
      'Optional activities',
      'Personal expenses',
      'Gratuities'
    ],
    images: {
      hero: '/images/packages/magical-family-hero.jpg',
      gallery: [
        '/images/packages/magical-family-1.jpg',
        '/images/packages/magical-family-2.jpg',
        '/images/packages/magical-family-3.jpg'
      ]
    },
    rating: 4.9,
    reviewCount: 247,
    featured: true,
    new: false
  },
  {
    id: 'arctic-adventure-week',
    slug: 'arctic-adventure-week',
    name: 'Arctic Adventure Week',
    shortDescription: 'An action-packed week of winter adventures for active families',
    description: 'For families who love adventure, our week-long package offers the ultimate Lapland experience. From thrilling snowmobile safaris to ice fishing on frozen lakes, every day brings new excitement. Perfect for families with children ages 7+ who enjoy outdoor activities.',
    duration: '7 days / 6 nights',
    durationNights: 6,
    idealFor: ['families', 'groups'],
    accommodationType: 'Aurora Glass Cabin',
    accommodationDescription: 'Stunning glass-roofed cabin with views of the Northern Lights from your bed. Modern amenities with traditional Finnish design.',
    activities: [
      {
        name: 'Extended Husky Safari',
        description: 'Full-day husky expedition through wilderness trails',
        duration: '6 hours',
        included: true,
        icon: 'husky'
      },
      {
        name: 'Snowmobile Wilderness Tour',
        description: 'Adventure through frozen lakes and forest trails',
        duration: '4 hours',
        included: true,
        icon: 'snowmobile'
      },
      {
        name: 'Ice Fishing Experience',
        description: 'Traditional ice fishing on a frozen Lapland lake',
        duration: '3 hours',
        included: true,
        icon: 'fishing'
      },
      {
        name: 'Cross-country Skiing',
        description: 'Guided skiing through beautiful winter landscapes',
        duration: '3 hours',
        included: true,
        icon: 'skiing'
      },
      {
        name: 'Northern Lights Tour',
        description: 'Professional guided aurora hunting expedition',
        duration: '4 hours',
        included: true,
        icon: 'aurora'
      },
      {
        name: 'Santa Village Visit',
        description: 'Visit to Santa Claus Village in Rovaniemi',
        duration: 'Half day',
        included: true,
        icon: 'santa'
      }
    ],
    difficulty: 'moderate',
    skiRequired: false,
    price: {
      adult: 3299,
      child: 2699,
      infant: 499,
      currency: 'GBP'
    },
    dates: {
      available: ['Dec 2025', 'Jan 2026', 'Feb 2026', 'Mar 2026'],
      soldOut: ['Dec 21-27, 2025']
    },
    maxCapacity: 16,
    spotsRemaining: 4,
    highlights: [
      'Sleep under the Northern Lights',
      'Full day husky adventure',
      'Ice fishing and wilderness survival',
      'Professional aurora photography',
      'Luxury glass cabin experience'
    ],
    includes: [
      '6 nights glass cabin accommodation',
      'Full board with gourmet dinners',
      'All activities as listed',
      'Premium thermal clothing',
      'Return airport transfers',
      'Professional guide throughout',
      'Aurora photography session'
    ],
    excludes: [
      'International flights',
      'Alcoholic beverages',
      'Personal expenses',
      'Travel insurance'
    ],
    images: {
      hero: '/images/packages/arctic-adventure-hero.jpg',
      gallery: [
        '/images/packages/arctic-adventure-1.jpg',
        '/images/packages/arctic-adventure-2.jpg',
        '/images/packages/arctic-adventure-3.jpg'
      ]
    },
    rating: 4.8,
    reviewCount: 156,
    featured: true,
    new: false
  },
  {
    id: 'santa-express-weekend',
    slug: 'santa-express-weekend',
    name: 'Santa Express Weekend',
    shortDescription: 'A magical short break to meet Father Christmas',
    description: 'Perfect for families with limited time, our weekend package delivers maximum magic in just 3 days. Fly directly to Lapland, meet Santa in his private cabin, enjoy exciting activities, and create precious memories without taking too much time off work or school.',
    duration: '3 days / 2 nights',
    durationNights: 2,
    idealFor: ['families'],
    accommodationType: 'Wilderness Lodge',
    accommodationDescription: 'Charming lodge rooms with forest views, shared lounge with fireplace, and family-style dining.',
    activities: [
      {
        name: 'Santa\'s Private Meeting',
        description: 'Intimate family audience with Father Christmas',
        duration: '45 mins',
        included: true,
        icon: 'santa'
      },
      {
        name: 'Elf Workshop',
        description: 'Make toys and treats with Santa\'s helpers',
        duration: '1.5 hours',
        included: true,
        icon: 'elf'
      },
      {
        name: 'Reindeer Sleigh Ride',
        description: 'Magical sleigh ride through snowy forests',
        duration: '1 hour',
        included: true,
        icon: 'reindeer'
      },
      {
        name: 'Tobogganing Hill',
        description: 'Unlimited fun on the snow slides',
        duration: 'Unlimited',
        included: true,
        icon: 'sledge'
      }
    ],
    difficulty: 'easy',
    skiRequired: false,
    price: {
      adult: 1299,
      child: 1099,
      infant: 199,
      currency: 'GBP'
    },
    dates: {
      available: ['Dec 2025', 'Dec 2026'],
      soldOut: ['Dec 20-22, 2025', 'Dec 22-24, 2025']
    },
    maxCapacity: 40,
    spotsRemaining: 12,
    highlights: [
      'Direct charter flights',
      'Private Santa meeting',
      'All-inclusive value',
      'Perfect for young children',
      'Minimum time, maximum magic'
    ],
    includes: [
      '2 nights lodge accommodation',
      'All meals',
      'All activities',
      'Warm clothing and boots',
      'Return charter flights',
      'All transfers'
    ],
    excludes: [
      'Travel to departure airport',
      'Optional activities',
      'Personal expenses'
    ],
    images: {
      hero: '/images/packages/santa-express-hero.jpg',
      gallery: [
        '/images/packages/santa-express-1.jpg',
        '/images/packages/santa-express-2.jpg',
        '/images/packages/santa-express-3.jpg'
      ]
    },
    rating: 4.7,
    reviewCount: 312,
    featured: false,
    new: false
  }
];

export const getPackageBySlug = (slug: string): Package | undefined => {
  return packages.find(pkg => pkg.slug === slug);
};

export const getFeaturedPackages = (): Package[] => {
  return packages.filter(pkg => pkg.featured);
};

export const getPackagesForIdealFor = (type: 'families' | 'groups'): Package[] => {
  return packages.filter(pkg => pkg.idealFor.includes(type));
};
