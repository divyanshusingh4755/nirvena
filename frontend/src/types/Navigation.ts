// ToDo:
// 1. Create a interface with name, href, icon
// 2. create a nvaigation link with that interface and export it
// 3. Navigations links are: home, Teenagers and Students - GraduationCap, Individual Adults - Users, Corporate/Employees - Building2, Couples - Heart

import { Building2, GraduationCap, Heart, Home, Users, type LucideIcon } from "lucide-react";

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
