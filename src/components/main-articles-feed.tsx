"use client"

import { StyleSheet, css } from 'aphrodite'
import React, { FC, useState } from 'react'
import { ArticleCard } from './article-card/article-card'
import { Article } from '@/types/types'

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
		padding: "0 30%"
	}
})

export const MainArticlesFeed: FC<FeedArticlesProps> = (props) => {

	const { articles } = props

	const [focusedIndex, setFocusedIndex] = useState(-1)

	const handleFocusChange = (index: number) => {
		setFocusedIndex(index === focusedIndex ? -1 : index)
	}

	return (
		<div className={css(styles.horizontalScrollContainer)}>
			<div className={css(styles.horizontalScroll)}>
				{articles.map((article, index) => (
					<ArticleCard containerStyle={index === 0 ? { marginLeft: 120} : undefined} onClick={() => handleFocusChange(index)} isSelected={index === focusedIndex} article={article} someIsSelected={focusedIndex > -1} key={article.id}/>
				))}
			</div>
		</div>
	) 
}
