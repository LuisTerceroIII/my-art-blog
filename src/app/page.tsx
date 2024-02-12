"use client"

import { MainArticlesFeed } from "@/components/main-articles-feed/main-articles-feed";
import { colors } from "@/theme/colors";

export default function Home() {

/* 	const postNewArticle = async () => {
		await fetch("http://localhost:3000/api", {
			method:"POST",
		})
	} */


	return (
		<main style={{ backgroundColor: colors.background }}>
			{/* <button onClick={postNewArticle}> POST SAVED</button> */}
			<MainArticlesFeed />
		</main>
	);
}
