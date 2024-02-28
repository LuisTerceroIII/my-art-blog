import React, { CSSProperties } from 'react'
import styles from "./main-menu.module.css"
import { SvgIcon } from '../svg-icons/svg-icon'

const waveIcon: CSSProperties = {
	height: 0,
}

export const MainMenu = () => {
	return (
		<section className={styles.menuContainer}>
			<button className={`${styles.mainButton} pressable`}>
			<SvgIcon icon='burgerMenu' width={30} height={30}/>
			</button>
		</section>
	)
}
