import { Article } from '@/types/types'
import { StyleSheet, css } from 'aphrodite'
import React, { CSSProperties, FC, useState } from 'react'
import { motion, useScroll, useSpring } from "framer-motion"
import { colors } from '@/theme/colors'
import MarkdownReader, { MarkdownAphroditeProps } from '../markdown-reader/markdown-reader'

export interface ArticleCardProps {
    article: Article
    isSelected: boolean
    onClick(): void
    onBlur(): void
    someIsSelected: boolean
    containerStyle?: CSSProperties
}

const styles = StyleSheet.create({
    mainContainer: {
        width: 200,
        borderRadius: 20,
        display: "flex",
		transition: "all 500ms",
        ":focus": {
            transform: "scale(1.4)",
        }
    },
    scaleUp: {
		transition: "all 500ms",
        ":hover" : {
            transform: "scale(1.4)",
            zIndex: 3
        },
    },
    selectedMainContainer: {
        width: 700,
        height: 500,
        zIndex: 5,
        borderRadius: 20
    },
    image: {
		width: 300,
        height: "auto",
        objectFit: "cover",
		cursor: "pointer",
		transition: "all 500ms",
        filter: "grayscale(100%)",
        ":hover": {
            filter: "grayscale(0%)",
        }
    },
    imageSelected: {
        filter: "grayscale(0%)",
        width: 250,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    },
    contentContainer: {
		width: 400,
        backgroundColor: colors.white,
        overflowY: "auto",
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
    },
    title: {
        fontSize: 20,
        color: colors.black,
        marginTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
    },
    imageTitle: {
        position: "absolute",
        bottom: -30,
        textAlign: "center",
        fontSize: 18,
        color: colors.white,
        zIndex: 2,
        textShadow: `0px 2px 2px ${colors.hardGrey}`
    },
    content: {
        fontSize: 12,
        padding: "0 18px 20px 18px",
        color: "black",
        marginTop: 20,
        textAlign: "center",
    },
    invisible: {
        display: "none"
    },
    progressBar: {
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        height: 5,
        background: colors.yellow,
        transformOrigin: '0%',
      }
})

const markdownStyles: MarkdownAphroditeProps = {
    container: {
        color: colors.black,
        fontSize: 11,
        lineHeight: 1.9,
        padding: "20px"
    }
}

export const ArticleCard: FC<ArticleCardProps> = (props) => {

    
    const { article, isSelected, onClick, onBlur, someIsSelected, containerStyle } = props

    const [imageIsHover, setImageIsHover] = useState(false)

    const contentRef = React.useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({container: contentRef})
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const handleImageHover = (e: any) => {
        setImageIsHover(true)
    }
    const handleImageBlur = (e: any) => {
        setImageIsHover(false)
    }

    return (
        <div style={containerStyle} className={css(styles.mainContainer, isSelected && styles.selectedMainContainer, !someIsSelected && styles.scaleUp)} onClick={onClick} tabIndex={1} onBlur={onBlur}>
            {isSelected ? (
                <motion.img onHoverStart={handleImageHover} onHoverEnd={handleImageBlur} src={article.main_photo_url} alt={article.title} className={css(styles.image, isSelected && styles.imageSelected, (!someIsSelected && !isSelected ) && styles.scaleUp )}/>
            ) : (
                <motion.div className={css(styles.scaleUp)} style={{position: "relative", zIndex: 2}} onHoverStart={handleImageHover} onHoverEnd={handleImageBlur} >
                    <motion.img src={article.main_photo_url} alt={article.title} className={css(styles.image, styles.scaleUp)}/>
                    <p className={css(imageIsHover ? styles.imageTitle : styles.invisible)}>{article?.title}</p>
                </motion.div>
            )}
            <section ref={contentRef} className={css(isSelected ? styles.contentContainer : styles.invisible)}>
                <motion.div style={{scaleX}} className={css(styles.progressBar)} />
                <p className={css(styles.title)}>{article.title}</p>
                <div style={{position: "relative"}}>
                    <MarkdownReader markdownUrl={article.contentFile?.url || ""} styles={markdownStyles}/>
                </div>
            </section>
        </div>
    )
}
