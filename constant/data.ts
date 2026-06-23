import { IEvent } from "./types";

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
