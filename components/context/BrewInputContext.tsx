import { createContext } from "react";
import { BrewInput } from "../utils/utils";

export const BrewInputContext = createContext<BrewInput | null>(null);