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
    href: "/our-programs",
  },
  {
    link: "Events",
    href: "events",
  },
  {
    link: "Contact Us",
    href: "Ccontact-us",
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
    title: "Education Support",
    description:
      "We work together to make a lasting difference, helping people with kindness and hard work.",
    image: "/images/Educational-Support.webp",
    slug: "education-support",
  },
  {
    id: 2,
    title: "Community Services",
    description:
      "We work together to make a lasting difference, helping people with kindness and hard work.",
    image: "/images/Community-Services.webp",
    slug: "education-support",
  },
  {
    id: 3,
    title: "Financial literate",
    description:
      "We work together to make a lasting difference, helping people with kindness and hard work.",
    image: "/images/Financial-literacy.webp",
    slug: "education-support",
  },
  {
    id: 4,
    title: "Counselling Services",
    description:
      "We work together to make a lasting difference, helping people with kindness and hard work.",
    image: "/images/counceling-services.webp",
    slug: "education-support",
  },
  {
    id: 5,
    title: "Education Support",
    description:
      "We work together to make a lasting difference, helping people with kindness and hard work.",
    image: "/save-a-village-by-gifting.jpg",
    slug: "education-support",
  },
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
    title: "Where can I get some?",
    intro:
      "Integer lobortis, velit quis facilisis pellentesque, massa quam pretium ligula, eget mattis arcu elit at nisi. Nullam nec enim at urna tempor fringilla. Vestibulum sed nibh laoreet, vulputate nibh a, sollicitudin arcu. Nam tempus nisl arcu. Phasellus cursus et tellus eget tincidunt. Phasellus mattis sagittis luctus. Maecenas vel justo sollicitudin, laoreet mauris vitae, rutrum urna.",
    list: [
      "Suspendisse pulvinar orci vitae condimentum feugiat.",
      "Curabitur cursus sapien eu ex cursus ultrices ac nec purus.",
      "Duis vehicula elit ut placerat rutrum.",
      "Nunc et felis non neque vehicula porttitor.",
    ],
    image: "/save-a-village-hero-1.jpg",
    outro:
      "Integer lobortis, velit quis facilisis pellentesque, massa quam pretium ligula, eget mattis arcu elit at nisi. Nullam nec enim at urna tempor fringilla. Vestibulum sed nibh laoreet, vulputate nibh a, sollicitudin arcu. Nam tempus nisl arcu. Phasellus cursus et tellus eget tincidunt. Phasellus mattis sagittis luctus. Maecenas vel justo sollicitudin, laoreet mauris vitae, rutrum urna.",
  },
  {
    title: "Our Vission",
    image: "/sva-team.jpg",
    intro:
      "Integer lobortis, velit quis facilisis pellentesque, massa quam pretium ligula, eget mattis arcu elit at nisi. Nullam nec enim at urna tempor fringilla. Vestibulum sed nibh laoreet, vulputate nibh a, sollicitudin arcu. Nam tempus nisl arcu. Phasellus cursus et tellus eget tincidunt. Phasellus mattis sagittis luctus. Maecenas vel justo sollicitudin, laoreet mauris vitae, rutrum urna.",
    list: [
      "Suspendisse pulvinar orci vitae condimentum feugiat.",
      "Curabitur cursus sapien eu ex cursus ultrices ac nec purus.",
      "Duis vehicula elit ut placerat rutrum.",
      "Nunc et felis non neque vehicula porttitor.",
      "Suspendisse pulvinar orci vitae condimentum feugiat.",
      "Curabitur cursus sapien eu ex cursus ultrices ac nec purus.",
      "Duis vehicula elit ut placerat rutrum.",
      "Nunc et felis non neque vehicula porttitor.",
    ],
  },
  {
    title: "Our History",
    image: "/save-a-village-poor-boy.jpg",
    intro:
      "Integer lobortis, velit quis facilisis pellentesque, massa quam pretium ligula, eget mattis arcu elit at nisi. Nullam nec enim at urna tempor fringilla. Vestibulum sed nibh laoreet, vulputate nibh a, sollicitudin arcu. Nam tempus nisl arcu. Phasellus cursus et tellus eget tincidunt. Phasellus mInteger lobortis, velit quis facilisis pellentesque, massa quam pretium ligula, eget mattis arcu elit at nisi. Nullam nec enim at urna tempor fringilla. Vestibulum sed nibh laoreet, vulputate nibh a, sollicitudin arcu. Nam tempus nisl arcu. Phasellus cursus et tellus eget tincidunt. Phasellus mattis sagittis luctus. Maecenas vel justo sollicitudin, laoreet mauris vitae, rutrum urna. <br /> <br /> Integer lobortis, velit quis facilisis pellentesque, massa quam pretium ligula, eget mattis arcu elit at nisi. Nullam nec enim at urna tempor fringilla. Vestibulum sed nibh laoreet, vulputate nibh a, sollicitudin arcu. Nam tempus nisl arcu. Phasellus cursus et tellus eget tincidunt. Phasellus mattis sagittis luctus. Maecenas vel justo sollicitudin, laoreet mauris vitae, rutrum urna. <br /> <br />Integer lobortis, velit quis facilisis pellentesque, massa quam pretium ligula, eget mattis arcu elit at nisi. Nullam nec enim at urna tempor fringilla. Vestibulum sed nibh laoreet, vulputate nibh a, sollicitudin arcu. Nam tempus nisl arcu. Phasellus cursus et tellus eget tincidunt. Phasellus mattis sagittis luctus. Maecenas vel justo sollicitudin, laoreet mauris vitae, rutrum urna.attis sagittis luctus. Maecenas vel justo sollicitudin, laoreet mauris vitae, rutrum urna.",
  },
];

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
