import v60 from "../../assets/recipes/v60.json";
import { Coffee } from "./utils";

let addImages = function(x: Coffee): Coffee {
  for (const step of x.steps) {
    if (step.title === "Pour") {
      step.image = require("../../assets/stepFavicons/pour.png");
    } else if (step.title === "Swirl") {
      step.image = require("../../assets/stepFavicons/swirl.png");
    } else if (step.title === "Wait") {
      step.image = require("../../assets/stepFavicons/wait.png");
    } else {
      console.log("Step title is not valid");
    }
  }
  return x;
};

export const Coffees: Coffee[] = [
  addImages(v60 as Coffee),
  addImages(v60 as Coffee)
];
