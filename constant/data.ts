import {
  IACHEIVEMENT,
  IDonationAmount,
  IEvent,
  IHeroSlide,
  INAVLINK,
  IProgram,
  ISTATEMENT,
  ITeam,
} from "./types";
import {
  FaBoxOpen,
  FaHandshake,
  FaHandshakeAngle,
  FaHandsHoldingChild,
} from "react-icons/fa6";

export const footerLinks = [
  {
    link: "About Us",
    href: "/about-us",
  },
  {
    link: "Our Program",
    href: "/programs",
  },
  {
    link: "Events",
    href: "events",
  },
  {
    link: "Contact Us",
    href: "contact-us",
  },
];

export const homeBlogs = [
  {
    id: 1,
    title: "Give Education, It’s The Best Gift Ever.",
    slug: "give-education-best-gift-ever",
    image: "/save-a-village-sharing-moment-with-poor.jpg",
    date: {
      day: "15",
      month: "Dec",
    },
    author: "Admin",
    category: "Donation",
  },
  {
    id: 2,
    title: "Don’t treat oceans as universal garbage cans",
    slug: "dont-treat-oceans-as-universal-garbage-cans",
    image: "/save-a-village-feeding-the-poor.jpg",
    date: {
      day: "15",
      month: "Dec",
    },
    author: "Admin",
    category: "Donation",
  },
  {
    id: 3,
    title: "The sun and the sand makes beaches beautiful",
    slug: "the-sun-and-the-sand-makes-beaches-beautiful",
    image: "/save-a-village-create-happy-moment.jpg",
    date: {
      day: "15",
      month: "Dec",
    },
    author: "Admin",
    category: "Donation",
  },
];

export const events: IEvent[] = [
  {
    id: 1,
    title: "Manager Disapproved of the Most Recent Work.",
    slug: "manager-disapproved-work-1",
    image: "/save-a-village-unwrap-joy.jpg",
    date: {
      day: "29",
      month: "July",
    },
    description:
      "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.",
    venue: "350 5th Ave New York, NY 118 United States",
  },
  {
    id: 2,
    title: "Manager Disapproved of the Most Recent Work.",
    slug: "manager-disapproved-work-2",
    image: "/save-a-village-sharing-moment-with-poor.jpg",
    date: {
      day: "29",
      month: "June",
    },
    description:
      "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.",
    venue: "350 5th Ave New York, NY 118 United States",
  },
  {
    id: 3,
    title: "Manager Disapproved of the Most Recent Work.",
    slug: "manager-disapproved-work-3",
    image: "/save-a-village-feeding-the-poor.jpg",
    date: {
      day: "29",
      month: "May",
    },
    description:
      "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.",
    venue: "350 5th Ave New York, NY 118 United States",
  },
  {
    id: 4,
    title: "Manager Disapproved of the Most Recent Work.",
    slug: "manager-disapproved-work-4",
    image: "/save-a-village-create-happy-moment.jpg",
    date: {
      day: "29",
      month: "April",
    },
    description:
      "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.",
    venue: "350 5th Ave New York, NY 118 United States",
  },
];

export const programs: IProgram[] = [
  {
    id: 1,
    title: "Educational Support",
    description:
      "<p>We offer educational assistance in many different ways. A few of the things we do are: supply of resources such as text books, payment of teachers, renovation and upgrading of school buildings, tuition assistance to students who qualify. Future and current educational support needs are vast, with the need for infrastructure that will motivate children to go to school. There is a need for play grounds, sports teams, bands, computer labs, science labs, and much ore.<br /> <br /> So far, we have supplied textbooks to children in one village, we are paying the salary for a PTA -hired teacher, subsidized tuition for students whose parents cannot afford, and subsidized the upgrading of a school building.</p>",
    image: "/images/Educational-Support.webp",
    slug: "education-support",
  },
  {
    id: 2,
    title: "Community Services",
    description:
      "We are dedicated to empowering vulnerable communities by providing sustainable support where it is needed most. We strongly believe that healthy communities create a healthy society. Our community services focus on breaking the cycle of poverty through holistic initiatives that secure clean water access, feeding assistance, improve local healthcare infrastructure, and establish quality education for children. By partnering directly with village leaders, we build and maintain critical facilities, offer vocational training for adults, and implement climate resilient agricultural programs. Together, we do not just deliver temporary aid; we equip residents with the tools, resources, and knowledge required to foster long-term self-reliance and thrive for generations to come.",
    image: "/images/Community-Services.webp",
    slug: "education-support",
  },
  {
    id: 3,
    title: "Financial Literacy",
    description:
      "We believe that true community growth starts with financial empowerment. We provide free financial literacy services designed to help you take control of your money and build a secure future. Money management is a challenge to many individuals and families; we offer easy to understand workshops, one-on-one coaching, and practical tools to master everyday money skills. Whether you want to create a budget that works, or start saving for your family's dreams, our team is here to support you every step of the way. Together, we are building stronger, more resilient communities by turning financial stress into lifelong confidence.",
    image: "/images/Financial-literacy.webp",
    slug: "education-support",
  },
  {
    id: 4,
    title: "Counseling Services",
    description:
      "We offer free counseling services to individuals, heterosexual couples, and families as need be. Our counseling services are aimed at restoring peace, self-confidence, and a balanced approach to life struggles and challenges. We believe that emotional well-being is the foundation for a happy and successful life. Our organization offers free, confidential counseling services to help people navigate life's challenges in a safe and supportive space. Our caring counselors are here to listen and guide people through stress, family difficulties, or personal struggles. We work hand in hand with people to build healthy coping skills, heal from tough times, and restore peace of mind. No matter what they are going through, they do not have to carry the weight alone; we are here to support everyone's journey toward hope and healing.",
    image: "/images/counceling-services.webp",
    slug: "education-support",
  },
  // {
  //   id: 5,
  //   title: "Education Support",
  //   description:
  //     "We work together to make a lasting difference, helping people with kindness and hard work.",
  //   image: "/save-a-village-by-gifting.jpg",
  //   slug: "education-support",
  // },
];

export const donationAmounts: IDonationAmount[] = [
  { id: 1, amount: "$10" },
  { id: 2, amount: "$20" },
  { id: 3, amount: "$50" },
  { id: 4, amount: "$100" },
  { id: 5, amount: "$1000" },
];

export const heroSlides: IHeroSlide[] = [
  {
    id: 1,
    title: "Empowering Hope Futures Lives Through Giving",
    description:
      "It is a long established fact that a reader will be distracted by readable content.",
    image: "/images/hero/hero-1.jpg",
    buttonText: "Join Us",
  },
  {
    id: 2,
    title: "Making Communities Stronger Together",
    description:
      "Support programs that bring positive change to people's lives.",
    image: "/images/hero/hero-2.jpg",
    buttonText: "Donate Now",
  },
];

export const teamData: ITeam[] = [
  {
    name: "Agba Baller",
    facebook: "https://www.facebook.com",
    x: "https://x.com",
    Instagram: "https://www.instagram.com",
    linkedIn: "https://www.linkedin.com/login",
    image: "/team.jpg",
    role: "Manager",
  },
  {
    name: "Victor Osihmen",
    facebook: "https://www.facebook.com",
    x: "https://x.com",
    Instagram: "https://www.instagram.com",
    linkedIn: "https://www.linkedin.com/login",
    image: "/team-2.jpg",
    role: "Manager",
  },
  {
    name: "Agba Baller",
    facebook: "https://www.facebook.com",
    x: "https://x.com",
    Instagram: "https://www.instagram.com",
    linkedIn: "https://www.linkedin.com/login",
    image: "/team.jpg",
    role: "Manager",
  },
  {
    name: "Victor Osihmen",
    facebook: "https://www.facebook.com",
    x: "https://x.com",
    Instagram: "https://www.instagram.com",
    linkedIn: "https://www.linkedin.com/login",
    image: "/team-2.jpg",
    role: "Manager",
  },
];

export const acheivement: IACHEIVEMENT[] = [
  {
    Icon: FaHandsHoldingChild,
    count: 260,
    image: "/save-a-village-feeding-the-poor.jpg",
    text: "Total Happy Children",
  },
  {
    Icon: FaHandshake,
    count: 110,
    image: "/save-a-village-feeding-the-poor.jpg",
    text: "Total Our Volunteer",
  },
  {
    Icon: FaBoxOpen,
    count: 190,
    image: "/save-a-village-feeding-the-poor.jpg",
    text: "Our Products & Gifts",
  },
  {
    Icon: FaHandshakeAngle,
    count: 560,
    image: "/save-a-village-feeding-the-poor.jpg",
    text: "Worldwide Donor",
  },
];

export const statement: ISTATEMENT[] = [
  {
    title: "Our Mission",
    intro:
      "Our mission is rooted in a holistic approach to community empowerment. Rather than addressing challenges in isolation, we focus on the interconnected needs of families by providing access to essential services in education, food security, shelter, and clothing. By doing so, we aim to break cycles of poverty and create pathways toward long term self sufficiency.",
    // list: [
    //   "Suspendisse pulvinar orci vitae condimentum feugiat.",
    //   "Curabitur cursus sapien eu ex cursus ultrices ac nec purus.",
    //   "Duis vehicula elit ut placerat rutrum.",
    //   "Nunc et felis non neque vehicula porttitor.",
    // ],
    image: "/save-a-village-hero-1.jpg",
    // outro:
    //   "Integer lobortis, velit quis facilisis pellentesque, massa quam pretium ligula, eget mattis arcu elit at nisi. Nullam nec enim at urna tempor fringilla. Vestibulum sed nibh laoreet, vulputate nibh a, sollicitudin arcu. Nam tempus nisl arcu. Phasellus cursus et tellus eget tincidunt. Phasellus mattis sagittis luctus. Maecenas vel justo sollicitudin, laoreet mauris vitae, rutrum urna.",
  },
  {
    title: "Our Vission",
    image: "/sva-team.jpg",
    intro:
      "Our vision is to create thriving communities where all individuals have access to quality education, safe housing, improved health conditions, and essential life-skills development needed to achieve success and a better quality of life.",
  },
  {
    title: "Our Values",
    image: "/save-a-village-poor-boy.jpg",
    intro: "",
    list: ["Faith", "Compassion", "Sacrifice", "Hard work"],
  },
];

export const aboutText =
  "<p>We understand that education is one of the most powerful tools for transformation. We actively support children and adults alike by connecting them with learning resources, mentorship opportunities, and educational programs that encourage growth, confidence, and future success. Simultaneously, we work to alleviate immediate hardships by ensuring families have reliable access to nutritious food and necessities that form the foundation of a stable life. <br /> <br /> Our work is driven by compassion, collaboration, and community engagement. We partner with local organizations, volunteers, and supporters who share our vision of creating stronger, healthier communities. Together, we strive to not only meet urgent needs but also empower individuals to build brighter futures for themselves and the generations that follow.<br /> <br /> We are more than an organization; we are a movement centered on hope, resilience, and collective responsibility. By standing alongside those in need and investing in their potential, we are helping to build communities where everyone has the opportunity to thrive.</p>";

export const navlinks: INAVLINK[] = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/about-us",
    label: "About Us",
  },
  {
    link: "/programs",
    label: "Programs",
  },
  {
    label: "Events",
    link: "/events",
  },
  {
    label: "Contact Us",
    link: "/contact-us",
  },
];

export const paymentLink =
  "https://www.paypal.com/donate/?hosted_button_id=L3H6DYJGXZDLW";

export const becomePartnerLink = "/join-us";

export const formTitles = [
  "Our Core Belief",
  "Personal Information",
  "Your Personal Interest",
  "Your Christian Background",
  "Background History",
  "Emergency Contact",
];
