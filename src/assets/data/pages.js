import {
  faUser,
  faHome,
  faSearch,
  faPlusSquare,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export default [
  {
    id: "home",
    title: "Home",
    icon: faHome,
    path: "/",
  },
  {
    id: "search",
    title: "Search",
    icon: faSearch,
    path: "/search",
  },
  {
    id: "upload",
    title: "Upload",
    icon: faPlusSquare,
    path: "/upload",
  },
  {
    id: "activity",
    title: "Activity",
    icon: faHeart,
    path: "/activity",
  },
  {
    id: "profile",
    title: "Profile",
    icon: faUser,
    path: "/profile/1",
  },
];
