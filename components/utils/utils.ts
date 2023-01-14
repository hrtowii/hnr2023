import React from "react";

export interface Coffee {
    name: CoffeeList
    description: string
    video: string
    image: React.ReactNode
    steps: Step[]
}

export type CoffeeList = "V60" | "Aeropress" | "Chemex" | "French Press";

export interface Step {
    icon: React.ReactNode
    time: number // seconds
    title: string
    description: string
}