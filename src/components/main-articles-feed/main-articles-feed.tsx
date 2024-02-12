import React, { FC, useEffect, useRef, useState } from 'react'
import { ArticleCard } from '../article-card/article-card'
import { Article, FetchState } from '@/types/types'
import { motion } from "framer-motion"
import { Loader } from '../loader/loader'
import styles from './main-articles-feed.module.css'

interface FeedArticlesProps { }

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
	}, [])

	return (
		<motion.div ref={contentRef} className={styles.horizontalScrollContainer} >
			<h1 className={styles.title}>Folium Ater</h1>
			<motion.div className={styles.horizontalScroll} style={{ width: isLoading ? '100%' : undefined }}>
				{isLoading ? <Loader style={{ alignSelf: "center" }} /> :
					articles.map((article: Article, index: number) => (
						<ArticleCard
							key={article?.id}
							onClick={() => handleFocusChange(index)}
							onBlur={() => handleFocusChange(-1)}
							isSelected={index === focusedIndex}
							article={article}
							someIsSelected={focusedIndex > -1} />
					))
				}
			</motion.div>
		</motion.div>
	)
}
