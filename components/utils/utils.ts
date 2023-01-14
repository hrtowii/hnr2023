import React, { ReactNode } from "react";

export interface Coffee {
	name: CoffeeList;
	video: string;
	image: string;
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
