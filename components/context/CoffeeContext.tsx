import { createContext } from "react";
import { Coffee } from "../utils/utils";

export const CoffeeContext = createContext<Coffee | null>(null);