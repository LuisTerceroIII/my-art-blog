"use client"

import React, { FC } from 'react'
import { IconSvgTypes } from '../svg-icons/icons-svg.types'
import { CircleButton } from '../circle-button/circle-button'
import styles from "./back-button.module.css"
import { useRouter } from 'next/navigation'
import { colorsName } from '@/theme/colors'

interface BackButtonProps {
	onClick?(): void
	icon?: IconSvgTypes
	containerClasses?: string
	color?: string
}

export const BackButton: FC<BackButtonProps> = (props) => {

    const router = useRouter()

	return (
		<CircleButton icon="leftArrow" onClick={router.back} containerClasses={styles.backButton} color={props.color}/>
	)
}