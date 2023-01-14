import React from "react";

export interface Coffee {
	name: CoffeeList;
	video: string;
	image: string;
	steps: Step[];
}

export type CoffeeList = "V60" | "Aeropress" | "Chemex" | "French Press";

export interface Step {
	title: string;
	time: number; // seconds
	description: string;
}
