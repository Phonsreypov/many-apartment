import { image } from "framer-motion/m";


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
  size: string;
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
    content:
      "Experience the beauty of Tremblant, Canada — a destination filled with stunning landscapes, luxury resorts, and unforgettable travel adventures.",
    paragraph: "",
    size: "",
  },
  {
    id: 2,
    title: "Choosing A Static Caravan",
    category: "Camping",
    date: "15th April, 2019",
    image: "/assets/img/blog/blog-2.jpg",
    content: "Choosing the perfect caravan can enhance your travel experience.",
    paragraph: "",
    size: "",
  },
  {
    id: 3,
    title: "Copper Canyon",
    category: "Event",
    date: "21th April, 2019",

    image: "/assets/img/blog/blog-3.jpg",
    content:
      "Discover the breathtaking beauty of Copper Canyon, a natural wonder in Mexico that offers stunning landscapes and unforgettable travel experiences.",
    paragraph: "",
    size: "",
  },
  {
    id: 4,
    title: "A Time Travel Postcard",
    category: "Trivago",
    date: "22th April, 2019",
    image: "/assets/img/blog/blog-4.jpg",
    content:
      "Discover the magic of time travel through postcards, where each card holds a story from the past, connecting us to moments and memories across time.",
    paragraph: "",
    size: "",
  },
  {
    id: 5,
    title: "Motorhome Or Trailer",
    category: "Camping",

    date: "25th April, 2019",
    image: "/assets/img/blog/blog-5.jpg",
    content:
      "Choosing between a motorhome and a trailer depends on your travel style, preferences, and needs. Both options offer unique advantages for your camping adventures.",
    paragraph: "",
    size: "",
  },
  {
    id: 6,
    title: "Virginia Travel For Kids",
    category: "Travel Trip",
    date: "28th April, 2019",
    image: "/assets/img/blog/blog-6.jpg",
    content:
      "Discover the best family-friendly attractions and activities in Virginia for an unforgettable travel experience with kids.",
    paragraph: "",
    size: "",
  },
];
export interface ContactInfoItem {
  label: string;
  value: string;
}

export const contactInfo: ContactInfoItem[] = [
  {
    label: "Address:",
    value: "856 Cordia Extension Apt. 356, Lake, US",
  },
  {
    label: "Phone:",
    value: "(12) 345 67890",
  },
  {
    label: "Email:",
    value: "info.colorlib@gmail.com",
  },
  {
    label: "Fax:",
    value: "+(12) 345 67890",
  },
];

export const contactContent = {
  title: "Contact Info",
  description:
    "We would love to hear from you. Whether you have a question about rooms, reservations, or anything else, our team is ready to assist you.",
};

export const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d740.2596594033496!2d103.86405804057917!3d13.356189069087195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311017bef28c4961%3A0xa2571cb14774b519!2z4Z6f4Z-S4Z6a4Z644Z6T4Z624Z6EIOGeleGfkuGekeGfh-GeiuGevOGehOGegeGfkuGemOGfguGemg!5e1!3m2!1sen!2skh!4v1772070825555!5m2!1sen!2skh";
export const footerData = {
  brand: {
    image: "/assets/img/footer.png",
    description:
      "Experience luxury living with modern comfort. Designed for travelers who value elegance, relaxation, and premium service.",
    socials: ["F", "T", "I", "Y"],
  },

  explore: {
    title: "Explore",
    links: [
      { label: "Rooms", url: "/rooms" },
      { label: "Gallery", url: "/gallery" },
      { label: "Events", url: "/events" },
      { label: "Blog", url: "/blog" },
    ],
  },

  contact: {
    title: "Contact",
    phone: "+855 12 345 678",
    email: "info@manyapartment.com",
    location: "Phnom Penh, Cambodia",
  },

  newsletter: {
    title: "Newsletter",
    description: "Subscribe for updates & exclusive offers.",
  },

  bottomLinks: [
    { label: "Privacy", url: "/privacy" },
    { label: "Terms", url: "/terms" },
    { label: "Policy", url: "/policy" },
  ],
};
export const reservationFormData = {
  title: "Your Reservation",

  fields: [
    {
      label: "Check In",
      type: "date",
      name: "check_in",
    },
    {
      label: "Check Out",
      type: "date",
      name: "check_out",
    },
    {
      label: "Guests",
      type: "select",
      name: "guests",
      options: ["1 Adult", "2 Adults", "3 Adults", "Family (4+)"],
    },
    {
      label: "Room",
      type: "select",
      name: "room",
      options: ["1 Room", "2 Rooms", "3 Rooms"],
    },
  ],

  buttonText: "CHECK AVAILABILITY",
};
export const slider = [
  {
    image: "/assets/img/room/room-1.jpg",
    title: "Discover Our Beautiful Rooms & Suites",
    subtitle: "Luxury Accommodation",
    description:
      "Experience comfort, elegance, and modern design with our exclusive rooms crafted for your perfect stay.",
  },
  {
    image: "/assets/img/room/room-2.jpg",
    title: "Modern Living With Elegant Comfort",
    subtitle: "Premium Experience",
    description:
      "Relax in stylish spaces designed to deliver luxury, peace, and unforgettable moments.",
  },
  {
    image: "/assets/img/room/room-3.jpg",
    title: "Your Perfect Stay Starts Here",
    subtitle: "Exclusive Suites",
    description:
      "Enjoy world-class facilities and beautifully crafted environments tailored for you.",
  },
];
