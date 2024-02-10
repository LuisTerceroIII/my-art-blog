"use client"
import { MainArticlesFeed } from "@/components/main-articles-feed";
import { colors } from "@/theme/colors";
import { useEffect, useState } from "react";

export default function Home() {

	const [articles, setArticles] = useState([])
	console.log("🚀 ~ Home ~ articles:", JSON.stringify(articles))

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
		<main style={{ backgroundColor: colors.softGrey }}>
			{/* <button onClick={postNewArticle}> POST SAVED</button> */}
			<MainArticlesFeed articles={articles}/>
		</main>
	);
}
