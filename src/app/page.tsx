"use client"

import { Loader } from "@/components/loader/loader";
import { MainArticlesFeed } from "@/components/main-articles-feed";
import { colors } from "@/theme/colors";
import { FetchState } from "@/types/types";
import { useEffect, useState } from "react";

const mainURL = "/api"
export default function Home() {

	const [articles, setArticles] = useState([])
	const [fetchState, setFetchState] = useState(FetchState.IDLE)

	useEffect(() => {
		const fetchArticles = async () => {
			setFetchState(FetchState.LOADING)
			const res = await fetch(mainURL)
			if (res.ok) {
				const data = await res.json()
				setArticles(data)
				setFetchState(FetchState.SUCCESS)
			} else setFetchState(FetchState.ERROR)
			console.log(fetchState)
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
			<MainArticlesFeed articles={articles} fetchState={fetchState} />
		</main>
	);
}
