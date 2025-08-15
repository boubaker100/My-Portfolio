import { AppWindow, PencilRuler, TerminalSquare } from 'lucide-react';
import { TabItem } from './../types/interfaces';
export const TabItems: TabItem[] = [
    {
        value: "frontend",
        label: "Frontend",
        icon: AppWindow,
    },
    {
        value: "backend",
        label: "Backend",
        icon: TerminalSquare
    },
    {
        value: "tools",
        label: "Tools",
        icon: PencilRuler
    }
];