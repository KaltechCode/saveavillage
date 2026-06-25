import { IconType } from "react-icons/lib";

export interface IFooterLinks {
  link: string;
  href: string;
}

export type IBlog = {
  id: number;
  title: string;
  slug: string;
  image: string;
  date: {
    day: string;
    month: string;
  };
  author: string;
  category: string;
};

export type IEvent = {
  id: number;
  title: string;
  slug: string;
  image: string;
  date: {
    day: string;
    month: string;
  };
  description: string;
  venue: string;
};

export type IProgram = {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
};

export type IDonationAmount = {
  id: number;
  amount: string;
};

export type IHeroSlide = {
  id: number;
  title: string;
  description: string;
  image: string;
  buttonText: string;
};

export type ITeam = {
  name: string;
  facebook: string;
  x: string;
  image: string;
  linkedIn: string;
  Instagram: string;
  role: string;
};

export type IACHEIVEMENT = {
  Icon: IconType;
  count: number;
  text: string;
  image: string;
};

export type ISTATEMENT = {
  title: string;
  intro: string;
  list?: string[];
  outro?: string;
  image: string;
};

export type INAVLINK = {
  link: string;
  label: string;
};
