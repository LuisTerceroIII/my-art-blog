"use client"

import React, { FC, useEffect, useRef, useState } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { ArticleCard } from './article-card/article-card'
import { Article, FetchState } from '@/types/types'
import { motion } from "framer-motion"
import { colors } from '@/theme/colors'
import { Loader } from './loader/loader'

interface FeedArticlesProps {
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

const mainURL = "/api"

export const MainArticlesFeed: FC<FeedArticlesProps> = (props) => {

	const [articles, setArticles] = useState([])
	const [fetchState, setFetchState] = useState(FetchState.IDLE)
	const [focusedIndex, setFocusedIndex] = useState(-1)

	const contentRef = useRef<HTMLDivElement>(null)
	const isLoading = fetchState === FetchState.LOADING

	const handleFocusChange = (index: number) => {
		setFocusedIndex(index === focusedIndex ? -1 : index)
	}

	useEffect(() => {
		const fetchArticles = async () => {
			setFetchState(FetchState.LOADING)
			const res = await fetch(mainURL)
			if (res.ok) {
				const data = await res.json()
				setArticles(data)
				setFetchState(FetchState.SUCCESS)
			} else setFetchState(FetchState.ERROR)
		}
		fetchArticles()
	},[])

	return (
		<motion.div ref={contentRef} className={css(styles.horizontalScrollContainer)} >
			<h1 className={css(styles.title)}>Folium Ater</h1>
			<motion.div className={css(styles.horizontalScroll)} style={{width: isLoading ? '100%' : undefined}}>
				{ isLoading ? <Loader style={{alignSelf: "center"}} /> : 
				articles.map((article: Article, index: number) => (
						<ArticleCard 
							key={article?.id} 
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
