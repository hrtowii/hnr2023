import React from "react";

export interface Coffee {
    name: CoffeeList
    video: string
    image: React.ReactNode
    steps: Step[]
}

export type CoffeeList = "V60" | "Aeropress" | "Chemex" | "French Press";

export interface Step {
    title: string
    time: number // seconds
    description: string
}