export type Route = {
  label: string;
  url: string;
  children?: Route[];
};

export const MenuTop: Route[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Rooms",
    url: "/rooms",
  },
  {
    label: "About Us",
    url: "/about",
  },
  {
    label: "Pages",
    url: "#",
    children: [
      { label: "Room Details", url: "/room-details" },
      { label: "Blog Details", url: "/blog-details" },
      { label: "Family Room", url: "/family-room" },
      { label: "Premium Room", url: "/premium-room" },
    ],
  },
  {
    label: "News",
    url: "/blog",
  },
  {
    label: "Contact",
    url: "/contact",
  },
];