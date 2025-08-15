import { Statistic } from "@/types/interfaces";

export function getStatistics() {

    const statistics: Statistic[] = [
        {
            label: "Years of experience",
            value: new Date().getFullYear() - 2023 // Assuming started in 2020
        },
        
        {
            label: "Completed projects",
            value: 2
        }
    ];
    return {statistics};
}