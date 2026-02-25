export const slides: string[] = [
  "/assets/img/hero/hero-1.jpg",
  "/assets/img/hero/hero-2.jpg",
  "/assets/img/hero/hero-3.jpg",
];
export const rooms = [
  {
    title: "One Bedroom Suite",
    price: 150,
    image: "/assets/img/room/room-b1.jpg",
  },
  {
    title: "Studio Apartment Suite",
    price: 200,
    image: "/assets/img/room/room-b2.jpg",
  },
  {
    title: "One Bedroom Suite",
    price: 150,
    image: "/assets/img/room/room-b3.jpg",
  },
  {
    title: "Balcony Room",
    price: 299,
    image: "/assets/img/room/room-b4.jpg",
  },
];
export const blogs = [
  {
    title: "Tremblant In Canada",
    category: "Travel Trip",
    date: "15th April, 2019",
    image: "/assets/img/blog/blog-1.jpg",
    size: "normal",
  },
  {
    title: "Choosing A Static Caravan",
    category: "Camping",
    date: "15th April, 2019",
    image: "/assets/img/blog/blog-2.jpg",
    size: "normal",
  },
  {
    title: "Copper Canyon",
    category: "Event",
    date: "21th April, 2019",
    image: "/assets/img/blog/blog-3.jpg",
    size: "normal",
  },
  {
    title: "Trip To Iqaluit In Nunavut A Canadian Arctic City",
    category: "Event",
    date: "08th April, 2019",
    image: "/assets/img/blog/blog-wide.jpg",
    size: "wide",
  },
  {
    title: "Traveling To Barcelona",
    category: "Travel",
    date: "12th April, 2019",
    image: "/assets/img/blog/blog-10.jpg",
    size: "small",
  },
];
export const testimonials = [
  {
    name: "Alexander Vasquez",
    text: "After a construction project took longer than expected, my husband, my daughter and I needed a place to stay for a few nights. We absolutely loved our vacation experience.",
    rating: 4.5,
  },
  {
    name: "Sophie Chen",
    text: "Amazing service and beautiful atmosphere. The experience was comfortable and memorable. Highly recommended!",
    rating: 5,
  },
  {
    name: "John Carter",
    text: "Clean rooms, friendly staff, and excellent location. Will definitely come back again.",
    rating: 4,
  },
];

export const breadCrumbs = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Rooms",
    url: "/rooms",
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "Contact",
    url: "/contact",
  },
  {
    name: "About",
    url: "/about",
  },
];
export interface BlogItem {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
}

export interface BlogDetail {
  paragraph: string;
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  content: string;
}

export const blogList: BlogItem[] = [
  {
    id: 1,
    title: "Tremblant In Canada",
    category: "Travel Trip",
    date: "15th April, 2019",
    image: "/assets/img/blog/blog-1.jpg",
  },
  {
    id: 2,
    title: "Choosing A Static Caravan",
    category: "Camping",
    date: "15th April, 2019",
    image: "/assets/img/blog/blog-2.jpg",
  },
  {
    id: 3,
    title: "Copper Canyon",
    category: "Event",
    date: "21th April, 2019",
    image: "/assets/img/blog/blog-3.jpg",
  },
  {
    id: 4,
    title: "A Time Travel Postcard",
    category: "Trivago",
    date: "22th April, 2019",
    image: "/assets/img/blog/blog-4.jpg",
  },
  {
    id: 5,
    title: "Motorhome Or Trailer",
    category: "Camping",
    date: "25th April, 2019",
    image: "/assets/img/blog/blog-5.jpg",
  },
  {
    id: 6,
    title: "Virginia Travel For Kids",
    category: "Travel Trip",
    date: "28th April, 2019",
    image: "/assets/img/blog/blog-6.jpg",
  },
];
export interface BlogDetail {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  content: string;
}

export const blogListDetails: BlogDetail[] = [
  {
    id: 1,
    title: "Tremblant In Canada",
    category: "Travel Trip",
    date: "15th April, 2019",
    image: "/assets/img/blog/blog-1.jpg",
    content: "Experience the beauty of Tremblant, Canada — a destination filled with stunning landscapes, luxury resorts, and unforgettable travel adventures.",
    paragraph: ""
  },
  {
    id: 2,
    title: "Choosing A Static Caravan",
    category: "Camping",
    date: "15th April, 2019",
    image: "/assets/img/blog/blog-2.jpg",
    content: "Choosing the perfect caravan can enhance your travel experience.",
    paragraph: ""
  },
  {
    id: 3,
    title: "Copper Canyon",
    category: "Event",
    date: "21th April, 2019",

    image: "/assets/img/blog/blog-3.jpg",
    content: "Discover the breathtaking beauty of Copper Canyon, a natural wonder in Mexico that offers stunning landscapes and unforgettable travel experiences.",
    paragraph: ""
  },
  {
    id: 4,
    title: "A Time Travel Postcard",
    category: "Trivago",
    date: "22th April, 2019",
    image: "/assets/img/blog/blog-4.jpg",
    content: "Discover the magic of time travel through postcards, where each card holds a story from the past, connecting us to moments and memories across time.",
    paragraph: ""
  },
  {
    id: 5,
    title: "Motorhome Or Trailer",
    category: "Camping",

    date: "25th April, 2019",
    image: "/assets/img/blog/blog-5.jpg",
    content: "Choosing between a motorhome and a trailer depends on your travel style, preferences, and needs. Both options offer unique advantages for your camping adventures.",
    paragraph: ""
  },
  {
    id: 6,
    title: "Virginia Travel For Kids",
    category: "Travel Trip",
    date: "28th April, 2019",
    image: "/assets/img/blog/blog-6.jpg",
    content: "Discover the best family-friendly attractions and activities in Virginia for an unforgettable travel experience with kids.",
    paragraph: ""
  },
];
