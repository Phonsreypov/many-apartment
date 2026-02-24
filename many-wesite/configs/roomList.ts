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
    title: "Studio Apartment Suite",
    slug: "studio-apartment-suite",
    price: 200,
    size: "30 ft",
    capacity: 2,
    bed: "King Bed",
    services: ["Wifi", "Television", "Bathroom", "Air Conditioning", "Balcony"],
    image: "/assets/img/room/room-1.jpg",
  },
  {
    id: 2,
    title: "One-Bedroom Suite",
    slug: "one-bedroom-suite",
    price: 150,
    size: "28 ft",
    capacity: 1,
    bed: "One Bed",
    services: [" Free Wifi", "Television", "Bathroom", "Air Conditioning"],
    image: "/assets/img/room/room-2.jpg",
  },
  {
    id: 3,
    title: "Spacial Last Room ",
    slug: "spacial-last-room",
    price: 150,
    size: "28 ft",
    capacity: 1,
    bed: "One Bed",
    services: ["Wifi", "Television", "Bathroom", "Air Conditioning"],
    image: "/assets/img/room/room-3.jpg",
  },
];
