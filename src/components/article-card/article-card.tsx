import { Article } from '@/types/types'
import React, { CSSProperties, FC } from 'react'
import { motion, useScroll, useSpring } from "framer-motion"
import MarkdownReader from '../markdown-reader/markdown-reader'
import styles from "./article-card.module.css"
import { longDateFormat } from '@/utils/formats'
import Image from 'next/image'

export interface ArticleCardProps {
    article: Article
    isSelected: boolean
    onClick(): void
    onBlur(): void
    someIsSelected: boolean
    containerStyle?: CSSProperties
    setLastArticleInViewport?(b:boolean): void
    isLast?: boolean
}

export const ArticleCard: FC<ArticleCardProps> = (props) => {

    
    const { article, isSelected, onClick, onBlur, someIsSelected, containerStyle, setLastArticleInViewport=(b:boolean)=>null, isLast=false } = props

    const contentRef = React.useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({container: contentRef})
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <motion.div 
            style={containerStyle} 
            className={`${styles.mainContainer} ${isSelected && styles.selectedMainContainer} ${!someIsSelected && styles.scaleUp}`} 
            onClick={onClick} 
            tabIndex={1} 
            onBlur={onBlur}
            onViewportEnter={() => {
                setLastArticleInViewport(isLast)
            }}>
            {isSelected ? (
                <Image src={article.main_photo_url || ""} alt={article.title} width={200} height={242} className={`${styles.image} ${isSelected && styles.imageSelected} ${!someIsSelected && !isSelected && styles.scaleUp}`}/>
            ) : (
                <motion.div className={styles.scaleUp} style={{position: "relative", zIndex: 2}}>
                    <Image src={article.main_photo_url || ""} alt={article.title} width={200} height={242} className={`${styles.image} ${styles.scaleUp}`}/>
                    <p className={styles.imageTitle}>{article?.title}</p>
                </motion.div>
            )}
            <section ref={contentRef} className={isSelected ? styles.contentContainer : styles.invisible}>
                <motion.div style={{scaleX}} className={styles.progressBar} />

                <p className={styles.title}>{article.title}</p>
                <div style={{position: "relative"}}>
                    <MarkdownReader markdownUrl={article.contentFile?.url || ""} classes={styles.markdownContainer}/>
                </div>
                <p className={styles.publishDate}>{longDateFormat(article?.publishedDate)}</p>
            </section>
        </motion.div>
    )
}
