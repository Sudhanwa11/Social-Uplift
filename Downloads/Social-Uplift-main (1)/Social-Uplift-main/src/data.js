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

// --- ADIGE DOSA HOUSE Media ---
import AdigeMainLogo from './assets/adigedosahouse_logo.jpeg';
import AdigeVideo1 from './assets/adigedosahouse_vid.MP4';

// --- BUDGET BAR Media ---
import BudgetBarMainLogo from './assets/Budgetbar_logo.jpeg';
import BudgetBarVideo1 from './assets/Budgetbar_vid.MP4';

// --- FINNS CAFE & DINE Media ---
import FinnsCafeMainLogo from './assets/finnscafe&dine_logo.jpeg';
import FinnsCafeVideo1 from './assets/finnscafe&dine_vid.MP4';

// --- SPARKLING STARS Media ---
import SparklingStarsMainLogo from './assets/sparklingstars_logo.jpeg';
import SparklingStarsVideo1 from './assets/sparklingstars_vid.MP4';

// --- BLUVA Media ---
import BluvaMainLogo from './assets/bluva_logo.jpeg';
import BluvaVideo1 from './assets/bluva_video.MP4';

// --- CINNAMON KITCHEN Media ---
import CinnamonMainLogo from './assets/Cinnamonkitchen_logo.jpeg';
import CinnamonVideo1 from './assets/Cinnamonkitchen_vid.MP4';

// --- CINNAMON COURTYARD Media ---
import CinnamonCourtyardMainLogo from './assets/CinnamonCourtYard_logo.jpeg';
import CinnamonCourtyardVideo1 from './assets/CinnamonCourtYard_vid.MP4';

// --- LORD OF FOODS Media ---
import LordOfFoodsMainLogo from './assets/LordofFoods_logo.jpeg';
import LordOfFoodsVideo1 from './assets/LordofFoods_vid.MP4';


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
    title: 'Cafe Lumos',
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
  },

  // -------------------------------
  // ⭐ ADIGE DOSA HOUSE (1 VIDEO)
  // -------------------------------
  {
    id: 'adige-dosa-house',
    title: 'Adige Dosa House',
    subtitle: 'Authentic South Indian Cuisine Branding',
    description:
      'Comprehensive restaurant marketing focusing on local SEO, food photography, and targeted social campaigns.',
    image: AdigeMainLogo,

    gallery: [
      { type: 'video', src: AdigeVideo1, poster: AdigeMainLogo }
    ],

    services: [
      'Food & Ambiance Photography',
      'Social Media Management (Instagram, Facebook)',
      'Local SEO & Google My Business',
      'Zomato & Swiggy Optimization'
    ],

    results: [
      { value: '+60%', label: 'Dine-in Footfall' },
      { value: '+45%', label: 'Online Delivery Orders' },
      { value: '+85%', label: 'Instagram Engagement' },
      { value: '4.8', label: 'Average Review Rating' }
    ]
  },

  // -------------------------------
  // ⭐ BUDGET BAR (1 VIDEO)
  // -------------------------------
  {
    id: 'budget-bar',
    title: 'Budget Bar',
    subtitle: 'High-Energy Nightlife Marketing',
    description:
      'Dynamic social media marketing and event promotion tailored for high-energy nightlife to drive table reservations.',
    image: BudgetBarMainLogo,

    gallery: [
      { type: 'video', src: BudgetBarVideo1, poster: BudgetBarMainLogo }
    ],

    services: [
      'Nightlife & Event Photography',
      'Social Media Management (Instagram, Snapchat)',
      'Influencer & Promoter Collaborations',
      'Event Campaign Execution'
    ],

    results: [
      { value: '+120%', label: 'Weekend Footfall' },
      { value: '+80%', label: 'VIP Table Bookings' },
      { value: '+150%', label: 'Social Media Reach' },
      { value: '30+', label: 'Sold Out Events' }
    ]
  },

  // -------------------------------
  // ⭐ FINNS CAFE & DINE (1 VIDEO)
  // -------------------------------
  {
    id: 'finns-cafe',
    title: 'Finns Cafe & Dine',
    subtitle: 'Vibrant Cafe & Dining Experience',
    description:
      'Elevated online presence through aesthetic food photography and targeted marketing to boost dining.',
    image: FinnsCafeMainLogo,

    gallery: [
      { type: 'video', src: FinnsCafeVideo1, poster: FinnsCafeMainLogo }
    ],

    services: [
      'Food & Lifestyle Photography',
      'Social Media Management (Instagram, Facebook)',
      'Video Reel Production',
      'Influencer Marketing'
    ],

    results: [
      { value: '+75%', label: 'Overall Footfall' },
      { value: '+50%', label: 'Evening Reservations' },
      { value: '+110%', label: 'Instagram Reach' },
      { value: '4.6', label: 'Average Review Rating' }
    ]
  },

  // -------------------------------
  // ⭐ SPARKLING STARS (1 VIDEO)
  // -------------------------------
  {
    id: 'sparkling-stars',
    title: 'Sparkling Stars',
    subtitle: 'Premium Event & Decor Styling',
    description:
      'Showcasing luxurious event setups through high-quality visual content to build a premium brand image.',
    image: SparklingStarsMainLogo,

    gallery: [
      { type: 'video', src: SparklingStarsVideo1, poster: SparklingStarsMainLogo }
    ],

    services: [
      'Event & Decor Photography',
      'Social Media Management (Instagram, Pinterest)',
      'Cinematic Highlight Reels',
      'Brand Identity Building'
    ],

    results: [
      { value: '+85%', label: 'Event Inquiries' },
      { value: '+60%', label: 'Brand Recognition' },
      { value: '+140%', label: 'Social Media Engagement' },
      { value: '25+', label: 'High-Ticket Bookings' }
    ]
  },

  // -------------------------------
  // ⭐ BLUVA (1 VIDEO)
  // -------------------------------
  {
    id: 'bluva',
    title: 'Bluva',
    subtitle: 'Premium Packaged Drinking Water',
    description:
      'Developed a sleek brand identity with compelling video production and social marketing to establish a premium choice.',
    image: BluvaMainLogo,

    gallery: [
      { type: 'video', src: BluvaVideo1, poster: BluvaMainLogo }
    ],

    services: [
      'Product & Lifestyle Photography',
      'Social Media Management (Instagram, LinkedIn)',
      'High-End Commercial Video Production',
      'Brand Positioning Strategy'
    ],

    results: [
      { value: '+150%', label: 'Brand Impressions' },
      { value: '+90%', label: 'B2B Inquiries' },
      { value: '+120%', label: 'Follower Growth' },
      { value: '10+', label: 'New Distribution Partners' }
    ]
  },

  // -------------------------------
  // ⭐ CINNAMON KITCHEN (1 VIDEO)
  // -------------------------------
  {
    id: 'cinnamon-kitchen',
    title: 'Cinnamon Kitchen',
    subtitle: 'Healthy & Gluten-Free Bakery Branding',
    description:
      'Crafted a wholesome brand narrative through engaging social media content, highlighting healthy baked goods.',
    image: CinnamonMainLogo,

    gallery: [
      { type: 'video', src: CinnamonVideo1, poster: CinnamonMainLogo }
    ],

    services: [
      'Food & Product Photography',
      'Social Media Management (Instagram, Facebook)',
      'Influencer Collaborations',
      'E-commerce Optimization Strategy'
    ],

    results: [
      { value: '+200%', label: 'Online Sales Growth' },
      { value: '+180%', label: 'Brand Reach' },
      { value: '+95%', label: 'Customer Engagement' },
      { value: '50+', label: 'Influencer Features' }
    ]
  },

  // -------------------------------
  // ⭐ CINNAMON COURTYARD (1 VIDEO)
  // -------------------------------
  {
    id: 'cinnamon-courtyard',
    title: 'Cinnamon Courtyard',
    subtitle: 'Elegant Dining & Ambience',
    description:
      'Elevating the dining experience through visual storytelling, capturing the sophisticated courtyard setting.',
    image: CinnamonCourtyardMainLogo,

    gallery: [
      { type: 'video', src: CinnamonCourtyardVideo1, poster: CinnamonCourtyardMainLogo }
    ],

    services: [
      'Ambiance & Culinary Photography',
      'Social Media Management (Instagram, Facebook)',
      'Video Marketing Campaigns',
      'Local Engagement Strategy'
    ],

    results: [
      { value: '+85%', label: 'Table Reservations' },
      { value: '+110%', label: 'Social Media Engagement' },
      { value: '+60%', label: 'Brand Awareness' },
      { value: '4.7', label: 'Average Customer Rating' }
    ]
  },

  // -------------------------------
  // ⭐ LORD OF FOODS (1 VIDEO)
  // -------------------------------
  {
    id: 'lord-of-foods',
    title: 'Lord of Foods',
    subtitle: 'Dynamic Restaurant & Cloud Kitchen Marketing',
    description:
      'Supercharged orders and dine-in traffic through aggressive social media campaigns and influencer partnerships.',
    image: LordOfFoodsMainLogo,

    gallery: [
      { type: 'video', src: LordOfFoodsVideo1, poster: LordOfFoodsMainLogo }
    ],

    services: [
      'Food & Menu Photography',
      'Social Media Management (Instagram, Zomato)',
      'Influencer Marketing',
      'Targeted Ad Campaigns'
    ],

    results: [
      { value: '+130%', label: 'Online Delivery Orders' },
      { value: '+75%', label: 'Dine-in Footfall' },
      { value: '+160%', label: 'Instagram Reach' },
      { value: '40+', label: 'Influencer Collaborations' }
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
    "We recently started working with Social Uplift, and they've been fantastic from day one! Their positive attitude, creative approach, and the amazing scripts they write have already made a great difference. - Rahul Joshi (Founder, Infinite Proptech)",

  'adige-dosa-house':
    "Social Uplift completely transformed our online presence. Since they took over our social media and Zomato profiles, we've seen a massive surge in both weekend dine-ins and weekday deliveries! - Manager (Adige Dosa House)",

  'budget-bar':
    "The energy Social Uplift brings to our marketing is unmatched! Our weekend events are consistently packed, and their creative reels have put Budget Bar on the map for the city's nightlife. - Owner (Budget Bar)",

  'finns-cafe':
    "Working with Social Uplift has been fantastic. They perfectly captured the vibe of our cafe and our food looks incredible on social media. We've seen a noticeable increase in new customers! - Management (Finns Cafe & Dine)",

  'sparkling-stars':
    "Social Uplift knows exactly how to make our events look as magical online as they do in person. Their reels have completely elevated our brand prestige and brought in our ideal clients. - Founder (Sparkling Stars)",

  'bluva':
    "The branding and content Social Uplift created for Bluva are simply outstanding. They gave our product the premium, crystal-clear image it deserved, opening up amazing new business channels for us. - Director (Bluva)",

  'cinnamon-kitchen':
    "Social Uplift perfectly understood our vision for healthy, guilt-free indulgence. Their beautifully shot reels and engaging posts have dramatically increased our online orders and brand awareness! - Founder (Cinnamon Kitchen)",

  'cinnamon-courtyard':
    "The team at Social Uplift has an amazing eye for detail. They captured the charm and elegance of our courtyard perfectly, and we've seen a fantastic increase in reservations and positive feedback from our online presence. - Management (Cinnamon Courtyard)",

  'lord-of-foods':
    "Social Uplift completely revolutionized how we market our food. Their campaigns are always fresh and engaging, and our online delivery numbers have skyrocketed since they took over! - Owner (Lord of Foods)"
};
