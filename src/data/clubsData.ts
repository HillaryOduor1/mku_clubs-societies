/*/ src/data/clubsData.ts
export interface Club {
  id: string;
  name: string;
  description: string;
  logo: string;
  about: string;
  blog: string;
  contact: string;
  hero?: {
    title: string;
    subtitle: string;
    image: string;
  };
  events?: Event[];
  team?: TeamMember[];
  contactForm?: ContactForm;
  brandColors?: BrandColors;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
}

export interface ContactForm {
  fields: {
    id: string;
    label: string;
    type: "text" | "email" | "textarea";
    required: boolean;
    placeholder?: string;
  }[];
  submitText: string;
  successMessage: string;
}

export interface BrandColors {
  primary: string;    // main club brand color
  secondary: string;  // complementary
  neutral: string;    // background neutrals
  contrast: string;   // text/high-contrast
}

// Example clubs
export const clubsData: Club[] = [
  {
    id: "ITclub",
    name: "Tech Innovation Club",
    description: "Driving technological innovation and digital transformation at MKU",
    logo: "/logos/it-club-logo.png",
    about:
      "The Mount Kenya University Tech Innovation Club is a student-led organization dedicated to fostering technological innovation, digital skills development, and creating solutions that address real-world challenges. We provide a platform for students to explore, learn, and innovate in various tech domains.",
    blog: "Latest tech trends, innovations, and club activities",
    contact: "itclub@mku.ac.ke",
    hero: {
      title: "Welcome to Tech Innovation Club",
      subtitle: "Where Ideas Meet Technology",
      image: "/hero/it-club-hero.jpg",
    },
    events: [
      {
        id: "1",
        title: "Annual Hackathon 2024",
        date: "2024-03-15",
        description: "Join us for our annual 48-hour hackathon focusing on sustainable tech solutions",
        image: "/events/hackathon.jpg",
      },
      {
        id: "2",
        title: "AI & Machine Learning Workshop",
        date: "2024-03-22",
        description: "Hands-on workshop on AI and ML fundamentals with practical projects",
        image: "/events/ai-workshop.jpg",
      },
    ],
    team: [
      {
        id: "1",
        name: "John Mwangi",
        role: "President",
        image: "/team/john.jpg",
        description: "Final year Computer Science student passionate about AI",
      },
      {
        id: "2",
        name: "Sarah Chebet",
        role: "Vice President",
        image: "/team/sarah.jpg",
        description: "Software Engineering major with focus on mobile development",
      },
    ],
    contactForm: {
      fields: [
        { id: "name", label: "Full Name", type: "text", required: true, placeholder: "Enter your name" },
        { id: "email", label: "Email Address", type: "email", required: true, placeholder: "you@example.com" },
        { id: "message", label: "Message", type: "textarea", required: true, placeholder: "Your inquiry about tech innovations..." },
      ],
      submitText: "Send Inquiry",
      successMessage: "Thanks for reaching out! We'll get back to you soon.",
    },
    brandColors: {
      primary: "#3B82F6", // blue
      secondary: "#9333EA", // purple
      neutral: "#F9FAFB", // gray-50
      contrast: "#111827", // gray-900
    },
  },
  {
    id: "debate",
    name: "Debate Club",
    description: "Enhancing public speaking and critical thinking skills",
    logo: "/logos/debate-club-logo.png",
    about: "The Debate Club focuses on developing public speaking and argumentation skills.",
    blog: "Debate competitions and public speaking tips",
    contact: "debate@mku.ac.ke",
    hero: {
      title: "Debate Club",
      subtitle: "Speak Your Mind, Shape Your World",
      image: "/hero/debate-hero.jpg",
    },
    events: [],
    team: [],
    contactForm: {
      fields: [
        { id: "name", label: "Your Name", type: "text", required: true, placeholder: "Enter your full name" },
        { id: "email", label: "Email Address", type: "email", required: true, placeholder: "debater@example.com" },
        { id: "topic", label: "Debate Topic", type: "text", required: false, placeholder: "Preferred debate topic" },
        { id: "message", label: "Message", type: "textarea", required: true, placeholder: "Write your thoughts or inquiry here..." },
      ],
      submitText: "Contact Debate Club",
      successMessage: "Thank you for contacting Debate Club! We’ll reply to your message shortly.",
    },
    brandColors: {
      primary: "#EF4444", // red
      secondary: "#F59E0B", // amber
      neutral: "#F3F4F6", // gray-100
      contrast: "#1F2937", // gray-800
    },
  },
];

// ✅ Helper function
export const getClubById = (id: string): Club | undefined => {
  return clubsData.find((club) => club.id === id);
};*/
// src/data/clubsData.ts
export interface Club {
  id: string;
  name: string;
  description: string;
  logo: string;
  about: string;
  blog: string;
  contact: string;
  hero?: {
    title: string;
    subtitle: string;
    image: string;
  };
  events?: Event[];
  team?: TeamMember[];
  contactForm?: ContactForm;
  brandColors?: BrandColors;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
}

export interface ContactForm {
  fields: {
    id: string;
    label: string;
    type: "text" | "email" | "textarea";
    required: boolean;
    placeholder?: string;
  }[];
  submitText: string;
  successMessage: string;
}

export interface BrandColors {
  primary: string;
  secondary: string;
  neutral: string;
  contrast: string;
}

export const clubsData: Club[] = [
  // ✅ Tech Innovation Club
  {
    id: "ITclub",
    name: "Tech Innovation Club",
    description: "Driving technological innovation and digital transformation at MKU.",
    logo: "/logos/it-club-logo.png",
    about:
      "The Tech Innovation Club at Mount Kenya University is a hub for bright minds passionate about technology. We inspire creativity, nurture digital skills, and transform bold ideas into practical innovations. From coding bootcamps to hackathons, our mission is to prepare students to lead in the ever-changing tech world.",
    blog: "Latest tech trends, innovations, and club activities.",
    contact: "itclub@mku.ac.ke",
    hero: {
      title: "Welcome to Tech Innovation Club",
      subtitle: "Where Ideas Meet Technology",
      image: "/hero/it-club-hero.jpg",
    },
    events: [
      {
        id: "1",
        title: "Annual Hackathon 2024",
        date: "2024-03-15",
        description: "A 48-hour hackathon creating solutions for sustainable development.",
        image: "/events/hackathon.jpg",
      },
    ],
    brandColors: {
      primary: "#3B82F6", // blue
      secondary: "#9333EA", // purple
      neutral: "#F9FAFB",
      contrast: "#111827",
    },
  },

  // ✅ Business Club
  {
    id: "business",
    name: "Business Club",
    description: "Empowering entrepreneurial leaders of tomorrow.",
    logo: "/logos/business-club-logo.png",
    about:
      "The Business Club equips students with the skills and mindset to thrive in the corporate and entrepreneurial world. Through networking, workshops, and real-world projects, members sharpen their financial acumen, leadership, and innovation to succeed in business ventures.",
    blog: "Insights on entrepreneurship, finance, and management.",
    contact: "businessclub@mku.ac.ke",
    hero: {
      title: "Business Club",
      subtitle: "Turning Ambition into Enterprise",
      image: "/hero/business-hero.jpg",
    },
    brandColors: {
      primary: "#10B981", // emerald green
      secondary: "#F59E0B", // amber
      neutral: "#F3F4F6",
      contrast: "#1F2937",
    },
  },

  // ✅ President’s Award Club
  {
    id: "presidentsAward",
    name: "President’s Award Club",
    description: "Unlocking potential through service, adventure, and personal growth.",
    logo: "/logos/presidents-award-logo.png",
    about:
      "The President’s Award Club challenges students to grow through community service, adventurous journeys, and skill-building. Members build resilience, responsibility, and leadership while making an impact in society.",
    blog: "Stories of service, adventure, and personal milestones.",
    contact: "presidentsaward@mku.ac.ke",
    hero: {
      title: "President’s Award Club",
      subtitle: "Challenge Yourself, Inspire Others",
      image: "/hero/presidents-award-hero.jpg",
    },
    brandColors: {
      primary: "#F59E0B", // amber gold
      secondary: "#2563EB", // royal blue
      neutral: "#FFF7ED", // warm cream
      contrast: "#1F2937", // slate
    },
  },

  // ✅ Journalism Club
  {
    id: "journalism",
    name: "Journalism Club",
    description: "Where voices are amplified, and stories come alive.",
    logo: "/logos/journalism-club-logo.png",
    about:
      "The Journalism Club at MKU nurtures storytellers, reporters, and media enthusiasts. Through publications, podcasts, photography, and campus journalism, we give students a platform to share impactful stories and develop strong communication skills.",
    blog: "Campus stories, opinions, and media highlights.",
    contact: "journalism@mku.ac.ke",
    hero: {
      title: "Journalism Club",
      subtitle: "Your Voice. Your Story. Your Platform.",
      image: "/hero/journalism-hero.jpg",
    },
    brandColors: {
      primary: "#F43F5E", // rose red
      secondary: "#3B82F6", // blue
      neutral: "#F3F4F6",
      contrast: "#1F2937",
    },
  },

  // ✅ Peer Counselors Club
  {
    id: "peerCounselors",
    name: "Peer Counselors Club",
    description: "Promoting mental health and wellbeing on campus.",
    logo: "/logos/peer-counselors-logo.png",
    about:
      "The Peer Counselors Club provides a safe space for students to support one another, promote mental health awareness, and empower peers with coping strategies. Our mission is to create a compassionate campus culture where no one feels alone.",
    blog: "Tips on mental health, wellbeing, and peer-to-peer support.",
    contact: "peercounselors@mku.ac.ke",
    hero: {
      title: "Peer Counselors Club",
      subtitle: "Because Talking Helps",
      image: "/hero/peer-counselors-hero.jpg",
    },
    brandColors: {
      primary: "#8B5CF6", // violet
      secondary: "#10B981", // teal green
      neutral: "#F9FAFB",
      contrast: "#111827",
    },
  },

  // ✅ Environment Club
  {
    id: "environment",
    name: "Environment Club",
    description: "Protecting nature, one action at a time.",
    logo: "/logos/environment-club-logo.png",
    about:
      "The Environment Club is dedicated to environmental conservation, climate change advocacy, and sustainability initiatives on campus and beyond. Members engage in tree planting, clean-ups, and awareness campaigns to safeguard our planet for future generations.",
    blog: "Updates on sustainability, conservation, and eco-projects.",
    contact: "environment@mku.ac.ke",
    hero: {
      title: "Environment Club",
      subtitle: "Act Local, Think Global",
      image: "/hero/environment-hero.jpg",
    },
    brandColors: {
      primary: "#22C55E", // green
      secondary: "#0EA5E9", // sky blue
      neutral: "#F0FDF4", // light green
      contrast: "#14532D", // deep green
    },
  },

  // ✅ MKU Nairobi South Sudanese Students Association
  {
    id: "southSudanese",
    name: "MKU Nairobi South Sudanese Students Association",
    description: "Building unity, culture, and empowerment for South Sudanese students.",
    logo: "/logos/south-sudanese-logo.png",
    about:
      "The MKU Nairobi South Sudanese Students Association is a community for South Sudanese students to celebrate culture, promote unity, and support one another academically and socially. Through events, mentorship, and cultural showcases, we build pride and solidarity.",
    blog: "Community stories, cultural events, and student empowerment.",
    contact: "southsudanese@mku.ac.ke",
    hero: {
      title: "South Sudanese Students Association",
      subtitle: "Unity in Diversity",
      image: "/hero/south-sudanese-hero.jpg",
    },
    brandColors: {
      primary: "#000000", // black (flag)
      secondary: "#DC2626", // red
      neutral: "#F3F4F6",
      contrast: "#FACC15", // yellow accent
    },
  },
];

// ✅ Helper
export const getClubById = (id: string): Club | undefined => {
  return clubsData.find((club) => club.id === id);
};

