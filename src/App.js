//https://miro.medium.com/max/1400/1*aRV5rpzxpJJqy5bwetWNgA.png

import React from "react";
import "./styles.css";
import Accordion1 from "./Accordion1";

let data3 = [
  {
    label: "Parent One",
    content: [
      {
        label: "Child one",
        content:
          "The cacao beans (also called cocoa beans) are the seeds that grow inside the pod, surrounded by fleshy, juicy fruit that tastes a little like a mango crossed with a pear that was carrying a lychee. After harvesting, the beans are fermented for up to a week to develop their flavors, and dried."
      }
    ]
  },
  { label: "Parent Two", content: [] },
  {
    label: "Parent Three",
    content: [
      {
        label: "Child one",
        content: [
          {
            label: "Grand Child One",
            content:
              "All chocolate, even white chocolate, starts with the fruit of the cacao tree, an equatorial, Seussian-looking plant with plump, bumpy, ovoid pods that grow directly from the trunk."
          },
          {
            label: "Grand Child Two",
            content: [
              {
                label: "Youngling One",
                content:
                  "To make chocolate, the dried beans are roasted, then cracked to separate the outer husks from the inner nibs, which have a nutty, earthy flavor and crunchy texture — and are excellent added to baked goods. The nibs are about half cocoa solids and half cocoa butter."
              },
              {
                label: "Youngling Two",
                content:
                  "And sometimes that’s true. But just as often, beans labeled as having a single origin in, say, Peru or Trinidad can come from small farms in different parts of that region, each farm with a distinct terroir, variety of cacao bean and fermentation process."
              }
            ]
          }
        ]
      }
    ]
  }
];

let data1 = [
  { label: "car", content: "bentley" },
  { label: "pen", content: "parker" },
  { label: "story", content: "fairy" }
];

let data2 = [
  { label: "car", content: [{ label: "petrol", content: "bentley" }] },
  { label: "pen", content: [{ label: "fountain", content: "bentley" }] },
  { label: "story", content: "fairy" }
];

export default function App() {
  return (
    <div style={{ width: "50%", left: "25%" }}>
      {data3.map((item) => (
        <Accordion1
          label={item.label}
          content={item.content}
          level="1"
          weight="900"
          size="25"
        />
      ))}
    </div>
  );
}
