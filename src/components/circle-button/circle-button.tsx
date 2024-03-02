import React, { FC } from 'react'
import { IconSvgTypes } from '../svg-icons/icons-svg.types'
import { SvgIcon } from '../svg-icons/svg-icon'
import styles from "./circle-button.module.css"
import { colors, colorsName } from '@/theme/colors'

interface CircleButtonProps {
	onClick?(): void
	icon?: IconSvgTypes
	containerClasses?: string
	color?: string
}

export const CircleButton: FC<CircleButtonProps> = (props) => {

	const { onClick, icon = "burgerMenu", containerClasses, color=colors.secondaryPurple } = props

	return (
		<div className={`${containerClasses} ${styles.circleButton} pressable`} onClick={onClick} style={{backgroundColor: color}}>
			<SvgIcon icon={icon} width={30} height={30} />
		</div>
	)
}
