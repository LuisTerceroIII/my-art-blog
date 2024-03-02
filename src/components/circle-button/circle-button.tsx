import React, { FC } from 'react'
import { IconSvgTypes } from '../svg-icons/icons-svg.types'
import { SvgIcon } from '../svg-icons/svg-icon'
import styles from "./circle-button.module.css"

interface CircleButtonProps {
	onClick?(): void
	icon?: IconSvgTypes
	containerClasses?: string
}

export const CircleButton: FC<CircleButtonProps> = (props) => {

	const { onClick, icon = "burgerMenu", containerClasses } = props

	return (
		<div className={`${containerClasses} ${styles.circleButton} pressable`} onClick={onClick}>
			<SvgIcon icon={icon} width={30} height={30} />
		</div>
	)
}
