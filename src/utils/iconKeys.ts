import { icons } from "lucide-react";
import { FilledIcons } from '@components/Icon/interfaces';

const lucideIconKeys = Object.keys(icons) as Array<keyof typeof icons>;

const filledIconKeys: FilledIcons[] = ['HeartFilled'];

export const iconKeys = [...lucideIconKeys, ...filledIconKeys] as const;