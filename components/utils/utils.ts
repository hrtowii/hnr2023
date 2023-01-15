export interface Coffee {
	name: CoffeeList;
	videoID: string;
	image: any;
	steps: Step[];
}

export type CoffeeList = "V60" | "Aeropress" | "Chemex" | "French Press";
export type videoID =
	| "1oB1oDrDkHM"
	| "j6VlT_jUVPc"
	| "ikt-X5x7yoc"
	| "st571DYYTR8";
export type StepList = "Pour" | "Wait" | "Swirl";

export interface Step {
	title: StepList;
	time: number; // seconds
	description: string;
	image: string | null;
}
