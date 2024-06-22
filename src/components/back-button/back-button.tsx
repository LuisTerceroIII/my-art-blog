"use client"
import React, { FC } from 'react'
import { IconSvgTypes } from '../svg-icons/icons-svg.types'
import { CircleButton } from '../circle-button/circle-button'
import styles from "./back-button.module.css"
import { useRouter } from 'next/navigation'

interface BackButtonProps {
	onClick?(): void
	icon?: IconSvgTypes
	containerClasses?: string
	color?: string
}

export const BackButton: FC<BackButtonProps> = (props) => {

    const router = useRouter()

	const goToHome = () => router.push("/")

	return (
		<CircleButton icon="leftArrow" onClick={goToHome} containerClasses={styles.backButton} color={props.color}/>
	)
}
