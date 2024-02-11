"use client"
import { MainArticlesFeed } from "@/components/main-articles-feed";
import { colors } from "@/theme/colors";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion"
import { StyleSheet, css } from 'aphrodite'


const styles = StyleSheet.create({

})

export default function Home() {

	const [articles, setArticles] = useState([])

	useEffect(() => {
		const fetchArticles = async () => {
			const res = await fetch('http://localhost:3000/api')
			const data = await res.json()
			setArticles(data)
		}
		fetchArticles()
	},[])

/* 	const postNewArticle = async () => {
		await fetch("http://localhost:3000/api", {
			method:"POST",
		})
	} */


	return (
		<main style={{ backgroundColor: colors.background }}>
			{/* <button onClick={postNewArticle}> POST SAVED</button> */}
			<MainArticlesFeed articles={articles}/>
		</main>
	);
}
