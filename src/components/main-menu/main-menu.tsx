import React, { CSSProperties, useState } from 'react'
import styles from "./main-menu.module.css"
import { SvgIcon } from '../svg-icons/svg-icon'
import { useRouter } from 'next/navigation'


const waveIcon: CSSProperties = {
	height: 0,
}

export const MainMenu = () => {

	const [isOpen, setIsOpen] = useState(false)
	const router = useRouter()

	const toggleMenu = () => {
		setIsOpen(prev => !prev)
	}
	const goToFlows = () => {
		setIsOpen(false)
		router.push("flows")
	}

	return (
		<section className={styles.menuContainer}>
			<div className={`${styles.mainButton} pressable`} onClick={toggleMenu}>
				<SvgIcon icon='burgerMenu' width={30} height={30}/>
			</div>
			<nav className={`${styles.menuBox} ${isOpen ? styles.openMenuBox : styles.closeMenuBox} pressable`} onClick={goToFlows}>
				<div style={{display:"flex", gap: 30, flexDirection:"column"}}>
					<SvgIcon icon='zig_zag' width={80} height={80} containerStyle={waveIcon}/>
					<SvgIcon icon='zig_zag' width={80} height={80} containerStyle={waveIcon}/>
					<SvgIcon icon='zig_zag' width={80} height={80} containerStyle={waveIcon}/>
				</div>
				<p className={styles.flowText}>Flows</p>
			</nav>
		</section>
	)
}
