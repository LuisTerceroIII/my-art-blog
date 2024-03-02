import React, { useState } from 'react'
import styles from "./main-menu.module.css"
import Link from 'next/link'
import { flowsRoutes } from '../p5'
import { flowsRoutesTx } from '@/utils/dictionary'
import { CircleButton } from '../circle-button/circle-button'


export const MainMenu = () => {

	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(prev => !prev)
	}
	const close = () => {
		setIsOpen(false)
	}


	const flowsLink = Object.values(flowsRoutes).map((path, index, arr) => {
		const isFirst = index === 0
		const isLast = index === arr?.length - 1
		return (
			<Link
				href={`flows/${path}`}
				style={{ marginTop: isFirst ? 10 : 0 }}
				key={path}
				className={styles.link}>
				<p className={`${styles.option} ${!isLast && styles.borderBottom}`}>{flowsRoutesTx[path]}</p>
			</Link>
		)
	})

	return (
		<section className={styles.menuContainer} onBlur={close} tabIndex={2}>
			<CircleButton onClick={toggleMenu} containerClasses={styles.mainButton} />
			<nav className={`${styles.menuBox} ${isOpen ? styles.openMenuBox : styles.closeMenuBox} pressable`}>
				<p className={styles.flowText}>Flujos</p>
				{flowsLink}
			</nav>
		</section>
	)
}
