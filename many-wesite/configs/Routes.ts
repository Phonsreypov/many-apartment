import { roomList } from "./roomList";


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
    children: roomList.map((roomDetail) => ({
      label: roomDetail.title,
      url: `/rooms/${roomDetail.slug}`,
    })),
  },
  {
    label: "About Us",
    url: "/about",
  },
  {
    label: "Blog",
    url: "/blog",
  },
  {
    label: "Contact",
    url: "/contact",
  },
];
