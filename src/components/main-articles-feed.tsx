"use client"

import React, { FC, useRef, useState } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { ArticleCard } from './article-card/article-card'
import { Article } from '@/types/types'
import { motion, useScroll, useSpring } from "framer-motion"
import { colors } from '@/theme/colors'

interface FeedArticlesProps {
	articles: Article[]
}

const styles = StyleSheet.create({
	horizontalScrollContainer: {
		display:"flex",
		width: '100%',
		overflowX: 'auto',
		height: "100svh"
	},
	horizontalScroll: {
		display: 'flex',
		alignSelf: "center",
		justifyContent: "center",
		alignItems: "center",
		padding: "0 30%",
	},
	progressBar: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 5,
        background: colors.yellow,
        transformOrigin: '0%',
      },
	  title: {
		fontSize: 85,
		position: "absolute",
		top: 50,
		right: 50,
		color: colors.black,
	}
})

export const MainArticlesFeed: FC<FeedArticlesProps> = (props) => {

	const { articles } = props
	const contentRef = useRef<HTMLDivElement>(null)

	const [focusedIndex, setFocusedIndex] = useState(-1)

	const handleFocusChange = (index: number) => {
		setFocusedIndex(index === focusedIndex ? -1 : index)
	}

	return (
		<motion.div ref={contentRef} className={css(styles.horizontalScrollContainer)} >
			<h1 className={css(styles.title)}>Folium Ater</h1>

			<motion.div className={css(styles.horizontalScroll)}>
			{articles.map((article, index) => (
					<ArticleCard 
						key={article.id} 
						onClick={() => handleFocusChange(index)}
						onBlur={() => handleFocusChange(-1)}
						isSelected={index === focusedIndex} 
						article={article} 
						someIsSelected={focusedIndex > -1}/>
				))}
			</motion.div>
		</motion.div>
	) 
}
