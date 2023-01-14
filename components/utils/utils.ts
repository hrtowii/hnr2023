import React from "react";

export interface Coffee {
    name: CoffeeList
    description: string
    video: string
    image: string
    steps: Step[]
}

export type CoffeeList = "V60" | "Aeropress" | "Chemex" | "French Press";

export interface Step {
    time: number // seconds
    title: string
    description: string
}