import v60 from "../../assets/recipes/v60.json";
import { Coffee, Step } from "./utils";

let addImages = function (x: Coffee): Coffee{
    for (const step of x.steps) {
        if(step.title === "Pour") {
            step.image = "../../assets/stepFavicons/pour.png";
        }
        else if (step.title === "Swirl") {
            step.image = "../../assets/stepFavicons/swirl.png";
        }
        else if (step.title === "Wait") {
            step.image = "../../assets/stepFavicons/wait.png";
        }
        else {
            console.log("Step title is not valid");
        }
    }
    return x;
}

export default {
    "V60": addImages(v60 as Coffee)
};