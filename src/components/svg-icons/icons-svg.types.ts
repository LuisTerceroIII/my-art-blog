import { BurgerMenuIcon, LeftArrowIcon, PlusIcon, ZigZagIcon } from "./index"

export const svgIcons = {
    zig_zag: ZigZagIcon,
    plus: PlusIcon,
    burgerMenu: BurgerMenuIcon,
    leftArrow: LeftArrowIcon
}

export type IconSvgTypes = keyof typeof svgIcons