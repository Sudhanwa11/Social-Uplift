// =============================
//        IMAGE / VIDEO IMPORTS
// =============================

// --- Portfolio Logos ---
import NiorMainLogo from './assets/NiorMainLogo.jpg';
import LumosMainLogo from './assets/LumosMainLogo.jpg';
import JainLifeMainLogo from './assets/JainLifeMainLogo.jpg';
import DoshiDesignMainLogo from './assets/DoshiDesignMainLogo.jpg';
import HovvMainLogo from './assets/HovvMainLogo.jpg';
import InfiniteProptechLogo from './assets/infinitepropMainlogo.jpg';

// --- Girls Flavour (REPLACES ILLIOS) ---
import GirlsFlavourMainLogo from './assets/GirlsFlavourMainLogo.jpg';
import GirlsFlavourImg01 from './assets/Girls01.jpg';
import GirlsFlavourVid02 from './assets/Girls02.mp4';
import GirlsFlavourVid03 from './assets/Girls03.mp4';

// --- NIOR Videos ---
import NiorVideo1 from './assets/niorvid1.mp4';
import NiorVideo2 from './assets/niorvid2.mp4';
import NiorVideo3 from './assets/niorvid3.mp4';

// --- LUMOS Videos ---
import LumosVideo1 from './assets/Lumos01.mp4';
import LumosVideo2 from './assets/Lumos02.mp4';
import LumosVideo3 from './assets/Lumos03.mp4';

// --- JAIN LIFE Media ---
import JainLifeImg01 from './assets/JainLife01.jpg';
import JainLifeVid02 from './assets/Jainlife02.mp4';
import JainLifeVid03 from './assets/Jainlife03.mp4';

// --- DOSHI DESIGN Media ---
import DoshiVideo1 from './assets/Doshi01.mp4';
import DoshiVideo2 from './assets/Doshi02.mp4';
import DoshiVideo3 from './assets/Doshi03.mp4';

// --- HOVV Patio Media ---
import HovvVideo1 from './assets/Hovvo1.mp4';
import HovvVideo2 from './assets/Hovv02.mp4';
import HovvImage3 from './assets/Hovv03.jpg';

// --- Infinite Proptech Media ---
import InfiniteVid01 from './assets/Infinite01.mp4';
import InfiniteImg02 from './assets/Infinite02.png';


// =============================
//        PORTFOLIO DATA
// =============================
export const portfolioData = [

  // -------------------------------
  // ⭐ NIOR (3 VIDEOS)
  // -------------------------------
  {
    id: 'nior-cafe',
    title: 'Nior Cafe',
    subtitle: 'Marketing & PR Campaign',
    description:
      'Marketing & PR services including content creation, social media management, influencer marketing, and event planning.',
    image: NiorMainLogo,

    gallery: [
      { type: 'video', src: NiorVideo1, poster: NiorMainLogo },
      { type: 'video', src: NiorVideo2, poster: NiorMainLogo },
      { type: 'video', src: NiorVideo3, poster: NiorMainLogo },
      { type: 'image', src: NiorMainLogo }
    ],

    services: [
      'Content Creation',
      'Social Media Management (Instagram, WhatsApp)',
      'Influencer Marketing',
      'Zomato & Swiggy Reviews',
      'Events & Campaigns Planning & Execution'
    ],

    results: [
      { value: '+45%', label: 'Footfall Increase' },
      { value: '+68%', label: 'Social Media Engagement' },
      { value: '+32%', label: 'Online Orders' },
      { value: '28', label: 'Influencer Collaborations' }
    ]
  },

  // -------------------------------
  // ⭐ LUMOS (3 VIDEOS)
  // -------------------------------
  {
    id: 'lumos-cafe',
    title: 'Lumos Cafe',
    subtitle: 'Gen Z Focused Marketing Campaign',
    description:
      'Marketing & PR services with a strong focus on creative social media management, engaging events, and impactful brand storytelling.',
    image: LumosMainLogo,

    gallery: [
      { type: 'video', src: LumosVideo1, poster: LumosMainLogo },
      { type: 'video', src: LumosVideo2, poster: LumosMainLogo },
      { type: 'video', src: LumosVideo3, poster: LumosMainLogo }
    ],

    services: [
      'Content Creation',
      'Social Media Management (Instagram, WhatsApp)',
      'Influencer Marketing',
      'Zomato & Swiggy Reviews',
      'Events & Campaigns Planning & Execution'
    ],

    results: [
      { value: '+52%', label: 'Instagram Followers' },
      { value: '+120%', label: 'Event Attendance' },
      { value: '+75%', label: 'Social Media Reach' },
      { value: '15', label: 'Successful Events' }
    ]
  },

  // -------------------------------
  // ⭐ JAIN LIFE (1 IMAGE + 2 VIDEOS)
  // -------------------------------
  {
    id: 'jain-life',
    title: 'Jain Life',
    subtitle: 'Content Creation & Brand Identity',
    description:
      'Comprehensive content creation services, professional photography, captivating graphic design, and innovative visual strategies',
    image: JainLifeMainLogo,

    gallery: [
      { type: 'image', src: JainLifeImg01 },
      { type: 'video', src: JainLifeVid02, poster: JainLifeImg01 },
      { type: 'video', src: JainLifeVid03, poster: JainLifeImg01 }
    ],

    services: [
      'In-House Content Creation',
      'Photography',
      'Graphic Designing',
      'UGC Content Creation'
    ],

    results: [
      { value: '+85%', label: 'Brand Recognition' },
      { value: '+60%', label: 'Social Media Engagement' },
      { value: '+40%', label: 'Website Traffic' },
      { value: '120+', label: 'Content Pieces Created' }
    ]
  },

  // -------------------------------
  // ⭐ DOSHI DESIGN (3 VIDEOS)
  // -------------------------------
  {
    id: 'doshi-design',
    title: 'Doshi Design Studio',
    subtitle: 'Brand Building & Portfolio Showcase',
    description:
      'Marketing services spanning content creation, social media handling, great script writing, and brand building to strengthen presence.',
    image: DoshiDesignMainLogo,

    gallery: [
      { type: 'video', src: DoshiVideo1, poster: DoshiDesignMainLogo },
      { type: 'video', src: DoshiVideo2, poster: DoshiDesignMainLogo },
      { type: 'video', src: DoshiVideo3, poster: DoshiDesignMainLogo }
    ],

    services: [
      'Content Creation',
      'Social Media Management (Instagram, Facebook)',
      'Script Writing',
      'Brand Building'
    ],

    results: [
      { value: '+70%', label: 'Project Inquiries' },
      { value: '+55%', label: 'Social Media Following' },
      { value: '+90%', label: 'Portfolio Visibility' },
      { value: '24', label: 'Strategic Meetings/Month' }
    ]
  },

  // -------------------------------
  // ⭐ GIRLS FLAVOUR (REPLACING ILLOS)
  // -------------------------------
  {
    id: 'girls-flavour',
    title: 'Girls Flavour',
    subtitle: 'Creative Fashion Content & Branding',
    description:
      'A premium lingerie brand where we handle creative content, branding, audience engagement and online presence.',
    image: GirlsFlavourMainLogo,

    gallery: [
      { type: 'image', src: GirlsFlavourImg01 },
      { type: 'video', src: GirlsFlavourVid02, poster: GirlsFlavourMainLogo },
      { type: 'video', src: GirlsFlavourVid03, poster: GirlsFlavourMainLogo }
    ],

    services: [
      'Fashion Content Creation',
      'Brand Identity Enhancement',
      'Creative Photoshoots',
      'Audience Engagement Strategy'
    ],

    results: [
      { value: '+85%', label: 'Brand Visibility' },
      { value: '+110%', label: 'Audience Engagement' },
      { value: '+65%', label: 'Instagram Reach' },
      { value: '40+', label: 'Creative Posts Delivered' }
    ]
  },

  // -------------------------------
  // ⭐ HOVV PATIO (2 VIDEOS + 1 IMAGE)
  // -------------------------------
  {
    id: 'how-patio',
    title: 'Hovv Patio & Farm',
    subtitle: 'Marketing & PR Strategy',
    description:
      'Comprehensive marketing and PR solutions to elevate brand awareness, strengthen customer engagement, and drive lasting growth.',
    image: HovvMainLogo,

    gallery: [
      { type: 'video', src: HovvVideo1, poster: HovvMainLogo },
      { type: 'video', src: HovvVideo2, poster: HovvMainLogo },
      { type: 'image', src: HovvImage3 }
    ],

    services: [
      'Content Creation',
      'Social Media Management (Instagram, WhatsApp)',
      'Influencer Marketing',
      'Zomato & Swiggy Reviews',
      'Events & Campaigns Planning & Execution'
    ],

    results: [
      { value: '+75%', label: 'Brand Awareness' },
      { value: '+50%', label: 'Customer Engagement' },
      { value: '+60%', label: 'Social Media Growth' },
      { value: '18', label: 'Creative Campaigns' }
    ]
  },

  // -------------------------------
  // ⭐ INFINITE PROPTECH (1 VIDEO + 1 IMAGE)
  // -------------------------------
  {
    id: 'infinite-proptech',
    title: 'Infinite Proptech',
    subtitle: 'Content Creation & Brand Building',
    description:
      'Holistic content creation services, strategic social media management, brand building, and creative storytelling.',
    image: InfiniteProptechLogo,

    gallery: [
      { type: 'video', src: InfiniteVid01, poster: InfiniteProptechLogo },
      { type: 'image', src: InfiniteImg02 }
    ],

    services: [
      'Content Creation',
      'Social Media Management (Instagram, Facebook)',
      'UGC Content Creation',
      'Brand Building'
    ],

    results: [
      { value: '+90%', label: 'Property Inquiries' },
      { value: '+65%', label: 'Social Media Presence' },
      { value: '+80%', label: 'Content Quality' },
      { value: '50+', label: 'Property Scripts' }
    ]
  }
];


// =============================
//        TESTIMONIALS
// =============================
export const clientTestimonials = {
  'nior-cafe':
    'Very helpful, and supportive PR team, always active. Awareness about our cafe has increased a lot. Footfall has also increased. - Himanshu Mishra (Manager - Nior Cafe)',

  'lumos-cafe':
    'Social Uplift has handled our socials with creativity from day one. The Coffee Rave was a standout — they nailed the Gen Z vibe and made it a hit, online and on-ground. - Armaan Siddiqui (Owner of Lumos)',

  'jain-life':
    "Social Uplift brought fresh creativity to Jain Life's social media. From unique photoshoots to engaging content, their work beautifully captured our brand's essence. - Naman Jain",

  'doshi-design':
    'Social Uplift has helped amplify our presence and showcase our portfolio with clarity and creativity. Their team is proactive and always ensures we have strategic meetings. - Soham Doshi',

  'girls-flavour':
    'Amazing work by Social Uplift! They understood our brand tone perfectly and created bold & elegant content that truly represents Girls Flavour. Engagement has grown massively! - Girls Flavour Team',

  'how-patio':
    'Social Uplift has really helped more people know about our cafe. Their posts and ideas are always creative, and we love their way of working. - Client of Hovv Patio & Farm',

  'infinite-proptech':
    "We recently started working with Social Uplift, and they've been fantastic from day one! Their positive attitude, creative approach, and the amazing scripts they write have already made a great difference. - Rahul Joshi (Founder, Infinite Proptech)"
};
