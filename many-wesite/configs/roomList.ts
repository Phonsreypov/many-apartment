export interface RoomData {
  id: number;
  title: string;
  slug: string;
  price: number;
  size: string;
  capacity: number;
  bed: string;
  services: string[];
  image: string;
}

export const roomList: RoomData[] = [
  {
    id: 1,
    slug: "studio-apartment-suite",
    title: "Studio Apartment Suite",
    price: 200,
    size: "30 ft",
    capacity: 2,
    bed: "King Bed",
    services: ["Wifi", "Television", "Bathroom", "Air Conditioning", "Balcony"],
    image: "/assets/img/room/room-1.jpg",
  },
  {
    id: 2,
    slug: "one-bedroom-suite",
    title: "One Bedroom Suite",
    price: 150,
    size: "28 ft",
    capacity: 1,
    bed: "One Bed",
    services: [" Free Wifi", "Television", "Bathroom", "Air Conditioning"],
    image: "/assets/img/room/room-2.jpg",
  },
  {
    id: 3,
    slug: "spacial-last-room",
    title: "Spacial Last Room",
    price: 150,
    size: "28 ft",
    capacity: 1,
    bed: "One Bed",
    services: ["Wifi", "Television", "Bathroom", "Air Conditioning"],
    image: "/assets/img/room/room-3.jpg",
  },
];
export interface RoomInfo {
  slug: string;
  title: string;
  price: number;
  image: string;
  images: string[];
  info: {
    size: string;
    capacity: string;
    bed: string;
    services: string;
  };
  description: string;
}

export const roomDetails: RoomInfo[] = [
  {
    slug: "studio-apartment-suite",
    title: "Studio Apartment Suite",
    price: 200,
    image: "/assets/img/room/room-1.jpg",
    images: ["/assets/img/room/room-3.jpg", "/assets/img/room/room-5.jpg", "/assets/img/room/room-6.jpg"],
    info: {
      size: "30 ft",
      capacity: "Max person 2",
      bed: "King Beds",
      services: "Wifi, Television, Bathroom...",
    },
    description: `Our apartment room offers a modern and comfortable living space designed for relaxation and convenience. With spacious interiors, quality bedding, and essential amenities, guests can enjoy a peaceful stay in a stylish environment. Perfect for couples or solo travelers, this room combines comfort, functionality, and contemporary design.`,
  },
  {
    slug: "spacial-last-room",
    title: "Spacial Last Room",
    price: 150,
    image: "/assets/img/room/room-3.jpg",
    images: ["/assets/img/room/room-3.jpg", "/assets/img/room/room-6.jpg", "/assets/img/room/room-2.jpg"],
    info: {
      size: "30 ft",
      capacity: "Max person 1",
      bed: "One Bed",
      services: "Wifi, Television, Bathroom...",
    },

    description: `Discover refined comfort in our apartment-style room, where contemporary design meets timeless elegance. The space is carefully crafted to provide guests with a relaxing atmosphere, premium furnishings, and modern conveniences. Enjoy a restful night on a comfortable bed, a spacious layout, and thoughtful details that elevate your stay into a truly luxurious experience.`,
  },
  {
    slug: "one-bedroom-suite",
    title: "One Bedroom Suite",
    price: 150,
    image: "/assets/img/room/room-2.jpg",
    images: ["/assets/img/room/room-2.jpg", "/assets/img/room/room-b1.jpg" , "/assets/img/room/room-4.jpg"],
    info: {
      size: "30 ft",
      capacity: "Max person 1",
      bed: "One Bed",
      services: "Wifi, Television, Bathroom...",
    },

    description: `Our apartment room offers a modern and comfortable living space designed for relaxation and convenience. With spacious interiors, quality bedding, and essential amenities, guests can enjoy a peaceful stay in a stylish environment. Perfect for couples or solo travelers, this room combines comfort, functionality, and contemporary design.`,
  },
];
