import React, { ReactNode } from "react";
import { Aeropress, V60Image } from "./images";
import { ImageSourcePropType } from "react-native";

export interface Coffee {
	name: CoffeeList;
	video: string;
	steps: Step[];
}

export type CoffeeList = "V60" | "Aeropress" | "Chemex" | "French Press";
export type StepList = "Pour" | "Wait" | "Swirl";


export interface Step {
    title: StepList;
	time: number; // seconds
	description: string;
    image: string | null;
}
