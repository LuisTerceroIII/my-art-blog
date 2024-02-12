"use client"

import React, { FC, useRef, useState } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { ArticleCard } from './article-card/article-card'
import { Article, FetchState } from '@/types/types'
import { motion } from "framer-motion"
import { colors } from '@/theme/colors'
import { Loader } from './loader/loader'

interface FeedArticlesProps {
	articles: Article[]
	fetchState: FetchState
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
		"@media(max-width: 900px)": {
			fontSize: 45,
			right: 20,

		}
	}
})

export const MainArticlesFeed: FC<FeedArticlesProps> = (props) => {

	const { articles, fetchState } = props
	const isLoading = fetchState === FetchState.LOADING
	const contentRef = useRef<HTMLDivElement>(null)

	const [focusedIndex, setFocusedIndex] = useState(-1)

	const handleFocusChange = (index: number) => {
		setFocusedIndex(index === focusedIndex ? -1 : index)
	}

	return (
		<motion.div ref={contentRef} className={css(styles.horizontalScrollContainer)} >
			<h1 className={css(styles.title)}>Folium Ater</h1>

			<motion.div className={css(styles.horizontalScroll)} style={{width: isLoading ? '100%' : undefined}}>
				{ isLoading ? <Loader style={{alignSelf: "center"}} /> : 
				articles.map((article, index) => (
						<ArticleCard 
							key={article.id} 
							onClick={() => handleFocusChange(index)}
							onBlur={() => handleFocusChange(-1)}
							isSelected={index === focusedIndex} 
							article={article} 
							someIsSelected={focusedIndex > -1}/>
					))
				}
			</motion.div>
		</motion.div>
	) 
}
