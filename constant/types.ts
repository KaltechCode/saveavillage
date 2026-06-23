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
