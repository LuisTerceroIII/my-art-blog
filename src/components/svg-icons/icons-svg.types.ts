import { BurgerMenuIcon, PlusIcon, ZigZagIcon } from "./index"

export const svgIcons = {
    zig_zag: ZigZagIcon,
    plus: PlusIcon,
    burgerMenu: BurgerMenuIcon
}

export type IconSvgTypes = keyof typeof svgIcons