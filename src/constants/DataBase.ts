import { Icons } from "./Icons";
import { Colors } from "./Theme";
import { Images } from "./Images";

export const courses = [
  {
    id: "1",
    title: "PHY103",
    description:
      "Learn the basics of Python programming, including syntax, data types, and functions.",
    image: Images.slide1,
  },
  {
    id: "2",
    title: "CPS201",
    description:
      "Build dynamic web applications using React, JSX, and state management.",
    image: Images.slide2,
  },
  {
    id: "3",
    title: "CSE201",
    description:
      "Explore data analysis, visualization, and machine learning techniques.",
    image: Images.slide3,
    },
  {
    id: "4",
    title: "PHY103",
    description:
      "Learn the basics of Python programming, including syntax, data types, and functions.",
    image: Images.slide1,
  },
];
 export  const rank = {
    rank: "1",
    score: "1000",
    streak: "10",
  };
 export const categories = [
    {
      id: 1,
      icon: Icons.create,
      text: "Create",
      navigate: "Create",
      color: Colors.green2,
    },
    {
      id: 2,
      icon: Icons.chat,
      text: "Forum",
      navigate: "Forum",
      color: Colors.primary,
    },
    {
      id: 3,
      icon: Icons.book2,
      text: "Past Question",
      navigate: "PastQuestion",
      color: Colors.primary2,
    },
];
  export const menuOptions = [
    { title: "Edit profile", icon: "person-circle-outline" },
    { title: "Upgrade to premium", icon: "star-outline" },
    { title: "Test History", icon: "time-outline" },
    { title: "Open web app", icon: "globe-outline" },
    { title: "Contact us", icon: "call-outline" },
    { title: "Terms & Condition", icon: "document-text-outline" },
    { title: "Report a problem", icon: "alert-circle-outline" },
    { title: "Log out", icon: "log-out-outline" },
  ];

 
