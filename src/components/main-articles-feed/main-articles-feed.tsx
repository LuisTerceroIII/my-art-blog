import React, { FC, useEffect, useRef, useState } from 'react'
import { ArticleCard } from '../article-card/article-card'
import { Article, FetchState } from '@/types/types'
import { motion } from "framer-motion"
import { Loader } from '../loader/loader'
import styles from './main-articles-feed.module.css'
import { Signature } from '../signature/signature'
import { Title } from '../title/title'
import { MainMenu } from '../main-menu/main-menu'
import { CircleButton } from '../circle-button/circle-button'

interface FeedArticlesProps { }

const mainURL = "/api"

export const MainArticlesFeed: FC<FeedArticlesProps> = (props) => {

	const [articles, setArticles] = useState<Article[]>([])
	const [cursorId, setCursorId] = useState(null)
	const [initFetchState, setInitFetchState] = useState(FetchState.IDLE)
	const [fetchState, setFetchState] = useState(FetchState.IDLE)
	const [focusedIndex, setFocusedIndex] = useState(-1)
	const [lastArticleInViewport, setLastArticuleInViewport] = useState(false)

	const contentRef = useRef<HTMLDivElement>(null)
	const isLoading = initFetchState === FetchState.LOADING

	const handleFocusChange = (index: number) => {
		setFocusedIndex(index === focusedIndex ? -1 : index)
	}

	useEffect(() => {
		const fetchArticles = async () => {
			setInitFetchState(FetchState.LOADING)
			const res = await fetch(mainURL)
			if (res.ok) {
				const data = await res.json()
				setArticles(data)
				setCursorId(data[data?.length - 1]?.id)
				setInitFetchState(FetchState.SUCCESS)
			} else setInitFetchState(FetchState.ERROR)
		}
		fetchArticles()
	}, [])

	useEffect(() => {
		const loadMoreArticles = async () => {
			if (!lastArticleInViewport) return
			if (cursorId == null) return
			setFetchState(FetchState.LOADING)
			const res = await fetch(`${mainURL}?cursorId=${cursorId}`)
			if (res.ok) {
				const data = await res.json()
				setArticles([...articles, ...data])
				setCursorId(data[data?.length - 1]?.id)
				setFetchState(FetchState.SUCCESS)
			} else setFetchState(FetchState.ERROR)
		}
		loadMoreArticles()
	}, [lastArticleInViewport])

	const scrollLeft = () => {
		if (contentRef.current) {
			contentRef.current.scrollBy({ left: -500, behavior: 'smooth' });
		}
	}

	const scrollRight = () => {
		if (contentRef.current) {
			contentRef.current.scrollBy({ left: 500, behavior: 'smooth' });
		}
	}

	return (
		<>
			<motion.div ref={contentRef} className={styles.horizontalScrollContainer} >
				<Title />
				<MainMenu />
				<motion.div className={styles.horizontalScroll} style={{ width: isLoading ? '100%' : undefined }}>
					<CircleButton icon="leftArrow" containerClasses={styles.scrollButton} onClick={scrollLeft} />
					{isLoading ? <Loader style={{ alignSelf: "center" }} /> :
						articles.map((article: Article, index: number) => (
							<ArticleCard
								key={article?.id}
								onClick={() => handleFocusChange(index)}
								onBlur={() => handleFocusChange(-1)}
								isSelected={index === focusedIndex}
								article={article}
								someIsSelected={focusedIndex > -1}
								setLastArticleInViewport={setLastArticuleInViewport}
								isLast={articles?.length - 1 === index}
								position={index}
							/>
						))
					}
					{fetchState === FetchState.LOADING && <Loader style={{ marginLeft: 16 }} />}
					<CircleButton icon="leftArrow" containerClasses={styles.scrollRightButton} onClick={scrollRight} />
				</motion.div>
			</motion.div>
			<Signature png classes={styles.signature} />
		</>
	)
}
