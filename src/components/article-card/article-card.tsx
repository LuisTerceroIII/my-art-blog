import { Article } from '@/types/types'
import { StyleSheet, css } from 'aphrodite'
import React, { CSSProperties, FC } from 'react'

export interface ArticleCardProps {
    article: Article
    isSelected: boolean
    onClick(): void
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
            transform: "scale(1.5)",

        }
    },
    scaleUp: {
        ":hover" : {
            transform: "scale(1.5)",
            zIndex: 2
        },
    },
    selectedMainContainer: {
        width: 700,
        height: 500,
        zIndex: 5,
        borderRadius: 20
    },
    image: {
		width: 200,
        height: "auto",
        objectFit: "cover",
		cursor: "pointer",
		filter: "grayscale(100%)",
		transition: "all 500ms",
        ":hover" : {
            filter: "grayscale(0%)",
            zIndex: 2
        },
    },
    imageSelected: {
        filter: "grayscale(0%)",
        width: 300,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    contentContainer: {
		width: 400,
        backgroundColor: "white",
        overflowY: "auto",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    title: {
        fontSize: 20,
        color: "black",
        textAlign: "center",
        marginTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
    },
    content: {
        fontSize: 12,
        padding: "0 18px 20px 18px",
        color: "black",
        marginTop: 20,
        textAlign: "center",
    },
    visible: {
        display: "none"
    }
})

export const ArticleCard: FC<ArticleCardProps> = (props) => {

    
    const { article, isSelected, onClick, someIsSelected, containerStyle } = props

    return (
        <div style={containerStyle} className={css(styles.mainContainer, isSelected && styles.selectedMainContainer, someIsSelected && styles.scaleUp)} onClick={onClick} tabIndex={1}>
            <img src={article.main_photo_url} alt={article.title} className={css(styles.image, isSelected && styles.imageSelected, (!someIsSelected && !isSelected ) && styles.scaleUp )}/>
            <section className={css(isSelected ? styles.contentContainer : styles.visible)}>
                <p className={css(styles.title)}>{article.title}</p>
            </section>
        </div>
    )
}
