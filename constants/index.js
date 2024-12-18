import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  model1,
  model2,
  model3,
  model4,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "@/public/assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [
  "/assets/home-smile.svg",
  "/assets/file-02.svg",
  "/assets/search-md.svg",
  "/assets/plus-square.svg",
];

export const notificationImages = [
  "/assets/notification/image-4.png",
  "/assets/notification/image-3.png",
  "/assets/notification/image-2.png",
];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  "assets/recording-03.svg",
  "assets/recording-01.svg",
  "assets/disc-02.svg",
  "assets/chrome-cast.svg",
  "assets/sliders-04.svg",
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: "/assets/roadmap/image-1.png",
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: "/assets/roadmap/image-2.png",
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: "/assets/roadmap/image-3.png",
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: "/assets/roadmap/image-4.png",
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const models = [
  {
    id: "0",
    title: "Visora",
    image: "assets/model-1.png",
    model: "enhance",
  },
  {
    id: "1",
    title: "Artisan",
    image: "assets/model-2.png",
    model: "cinematic-diva",
  },
  {
    id: "2",
    title: "Realism",
    image: "assets/model-3.png",
    model: "hyperrealism",
  },
  {
    id: "3",
    title: "Anime",
    image: "assets/model-4.png",
    model: "anime",
  },
];

export const styles = [
  {
    id: "0",
    title: "No Style",
  },
  {
    id: "1",
    title: "Icon",
    image: "assets/style-1.png",
  },
  {
    id: "2",
    title: "Logo",
    image: "assets/style-2.png",
  },
];

export const aspectRatios = [
  {
    id: "0",
    title: "2:3",
    image: "/assets/aspect-ratio1.png",
  },
  {
    id: "1",
    title: "1:1",
    image: "/assets/aspect-ratio2.png",
  },
  {
    id: "2",
    title: "16:9",
    image: "/assets/aspect-ratio3.png",
  },
  {
    id: "3",
    title: "Custom",
    image: "/assets/aspect-ratio4.png",
  },
];

export const randomPrompts = [
  "Futuristic cityscape at sunset, with flying cars and neon lights reflecting off glass skyscrapers.",
  "A mystical forest with glowing mushrooms, fireflies, and mist rolling over vibrant green moss.",
  "Vintage 1920s café in Paris during a rainy evening, people with umbrellas walking under warm, dim street lights.",
  "Steampunk-inspired robot blacksmith in an ancient forge, surrounded by gears and glowing embers.",
  "Desert landscape with towering red rock formations and a river of stars flowing through the night sky.",
  "An underwater palace built from coral and seashells, illuminated by bioluminescent sea creatures.",
  "Astronaut standing on an alien planet with purple mountains, strange flora, and twin suns in the sky.",
  "Medieval library filled with ancient scrolls, magical artifacts, and a glowing enchanted globe.",
  "A cyberpunk alleyway with neon graffiti, steam rising from vents, and a lone figure in a futuristic trench coat.",
  "A surreal landscape where the ocean meets the clouds, with islands floating in the sky and boats sailing on clouds.",
  "A fairytale castle surrounded by mist, with colorful hot air balloons floating around it at sunrise.",
  "A cozy cabin in the snowy mountains, with smoke rising from the chimney and the northern lights in the background.",
  "Space station orbiting a distant planet with massive rings, looking out through a large observation window.",
  "A village built in the treetops of a lush jungle, connected by hanging bridges and lit by lanterns.",
  "A bustling fantasy marketplace, with vendors selling potions, mystical artifacts, and exotic spices.",
  "Ancient ruins overgrown with vines, with statues of forgotten gods and a hidden waterfall nearby.",
  "A futuristic train speeding through a landscape of towering wind turbines and solar farms at dawn.",
  "A serene Japanese garden with koi ponds, stone lanterns, and cherry blossoms in full bloom.",
  "A city where each building is an enormous crystal, refracting sunlight into vibrant rainbow colors.",
  "A cozy Victorian-style library, with towering bookshelves, a crackling fireplace, and armchairs for reading.",
];

export const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Basic features to get you started.",
    features: [
      {
        name: "Basic AI Chat",
        info: "Access to our AI chatbot with basic functionality",
      },
      {
        name: "5 Code Generations/day",
        info: "Generate up to 5 code snippets per day",
      },
      { name: "Community Support", info: "Get help from our community forums" },
    ],
    buttonLabel: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$15",
    period: "month",
    description: "Unlock advanced features for power users.",
    features: [
      {
        name: "Unlimited AI Chat",
        info: "Unlimited access to our advanced AI chatbot",
      },
      {
        name: "Unlimited Code Generation",
        info: "Generate as many code snippets as you need",
      },
      {
        name: "Priority Support",
        info: "Get faster responses from our support team",
      },
      {
        name: "Access to New Features",
        info: "Be the first to try our latest features",
      },
    ],
    buttonLabel: "Upgrade to Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Custom solutions for larger teams.",
    features: [
      {
        name: "Customized AI Solutions",
        info: "Tailored AI models for your specific needs",
      },
      {
        name: "Dedicated Account Manager",
        info: "Personal support from an account manager",
      },
      {
        name: "Onboarding & Training",
        info: "Comprehensive onboarding for your team",
      },
      {
        name: "24/7 Support",
        info: "Round-the-clock support for critical issues",
      },
    ],
    buttonLabel: "Contact Sales",
    popular: false,
  },
];