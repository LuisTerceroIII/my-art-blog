import { Article } from '@/types/types'
import { StyleSheet, css } from 'aphrodite'
import React, { CSSProperties, FC } from 'react'
import { motion, useScroll, useSpring } from "framer-motion"
import { colors } from '@/theme/colors'

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

export const ArticleCard: FC<ArticleCardProps> = (props) => {

    
    const { article, isSelected, onClick, someIsSelected, containerStyle } = props

    const contentRef = React.useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({container: contentRef})
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      })

    return (
        <div style={containerStyle} className={css(styles.mainContainer, isSelected && styles.selectedMainContainer, someIsSelected && styles.scaleUp)} onClick={onClick} tabIndex={1}>
            <img src={article.main_photo_url} alt={article.title} className={css(styles.image, isSelected && styles.imageSelected, (!someIsSelected && !isSelected ) && styles.scaleUp )}/>
            <section ref={contentRef} className={css(isSelected ? styles.contentContainer : styles.visible)}>
                <motion.div style={{scaleX }} className={css(styles.progressBar)} />
                <p className={css(styles.title)}>{article.title}</p>
                <div style={{position: "relative"}}>
                    <p className={css(styles.content)}>
                        La creciente adicción a plataformas de videos cortos es abismal; niños, adolescentes y adultos de todas las edades ven morir cientos de horas de sus vidas en estas plataformas. YouTube Shorts, Instagram, Facebook Reels y TikTok han ganado una popularidad inusual.
                        ¿Dónde tiene sus raíces esta condición? ¿Por qué es tan alto el consumo, que obtenemos de tanta información corta? ¿Qué beneficio o sensación gratificante explica tales niveles de uso?

                        Me parece que esta adicción tiene sus raíces en el ciudadano modelo del capitalismo tardío, aquel que se reconoce impotente ante la maquinaria social del mundo actual, aquel que vive muchas veces triste, solitario y sin ningún sentido ulterior en sus actos.

                        Hoy, por la crianza social, somos seres que buscamos el entretenimiento, pues eso siempre se nos ha enseñado. "Haz la tarea, ve al trabajo; luego, en tu tiempo libre, bebe, disfruta con tus seres queridos, mira una película, compra algo". La premisa es trabajar y relajarse, producir y entretenerse, luego producir más y entretenerse aún más.

                        La lógica de ir por más, la lógica de producción, más trabajo, más diversión, ya no da abasto. Nos olvidamos de cómo descansar sin visitar un cine o ir a un evento importante; nos olvidamos, al menos gran parte de nosotros, de la interioridad. Ahora tenemos entretenimiento, relajación, "un respiro" de la incesante producción al alcance de la mano: reels y tiktoks. Nos reímos, encontramos variopintos de cosas interesantes, lugares maravillosos en el mundo y vidas guionadas sorprendentes; un mundo en general desapegado bastante de la realidad material de la mayoría.

                        El ciudadano tardío ha perdido dos cosas que lo hacen presa fácil de la entretención granulada.

                        Ha perdido el sentido y ha perdido el silencio.

                        ¿Ya no hay tiempo, ánimo o dinero para lidiar con las responsabilidades? Pues mira unos cortos videos, estoy seguro de que te sacarán una sonrisa.
                    </p>
                </div>
            </section>
        </div>
    )
}
