"use client"

import { MainArticlesFeed } from "@/components/main-articles-feed/main-articles-feed";
import { BackgroundFlowFragtal } from "@/components/p5/index";
import { colors } from "@/theme/colors";
import { useEffect, useState } from "react";

export default function Home() {

	const [initialized, setInitialized] = useState(false)

	useEffect(() => {
		const updateVisitors = async () => {
			try {
				let res = await fetch('/api/analytics/general/visit-counter', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				})
				res = await res.json()
				
				await fetch('/api/analytics/general/visit-counter', {
					method: 'POST',
					body: JSON.stringify({
						// @ts-ignore
						visits: res?.visits + 1,
						visitors: [
							{
								time: new Date(),
								userAgent: window.navigator.userAgent
							}, 
							// @ts-ignore
							...res?.visitors
						]
					}),
					headers: {
						'Content-Type': 'application/json'
					}
				})
			} catch (e) {
				console.log("Error", JSON.stringify(e))
			}
		}
		if(!initialized) {
			updateVisitors()
			setInitialized(true)
		}
	}, [])

	return (
		<main style={{ backgroundColor: colors.background }}>
			<div style={{position: "absolute", top: 0, width: "100%"}}>
				<BackgroundFlowFragtal/>
			</div>
			<MainArticlesFeed />
		</main>
	);
}
