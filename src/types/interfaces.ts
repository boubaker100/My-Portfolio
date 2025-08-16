import { LucideIcon } from "lucide-react";

export interface SocialLink {
    href: string;
    icon: LucideIcon
}
export interface NavLink extends SocialLink {
    title: string;               
}
export interface Statistic {
    label: string;
    value: number;
}
export type SkillCategory = "frontend" | "backend" | "tools";

export interface Skill {
    _id: string;
    label: string;
    value: number;
    category: SkillCategory;
}

export interface Project {
   
    _id: string;
    title: string;
    description: string;
    images: any[]; // Assuming images is an array of image objects
    demolink: string;
    githubLink: string;
    publishedAt: Date;
    isResponsive: boolean;
    tags: any[];

}
export interface TabItem{
   
    value: SkillCategory,
    label: string,
    icon: LucideIcon,


} 