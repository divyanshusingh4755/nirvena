import { Building2, GraduationCap, Heart, Users, type LucideIcon } from "lucide-react";

export interface NavLink {
    name: string;
    href: string;
    icon?: LucideIcon;
}


export const NavigationLink: NavLink[] = [
    { name: 'Teenagers & Students', href: 'teenagers-and-students', icon: GraduationCap },
    { name: 'Indvidual Adults', href: 'individual-adults', icon: Users },
    { name: 'Corporate/Employees', href: 'corporate-employees', icon: Building2 },
    { name: 'Couples', href: 'couples', icon: Heart },
]
