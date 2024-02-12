import React, { CSSProperties, FC } from 'react'
import styles from "./loader.module.css"

interface LoaderProps {
	style?: CSSProperties
}

export const Loader: FC<LoaderProps> = ({ style }) => {
	return (
		<span style={style} className={styles.loader}></span>
	)
}
