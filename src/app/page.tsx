"use client"

import { MainArticlesFeed } from "@/components/main-articles-feed/main-articles-feed";
import { BackgroundFlowFragtal } from "@/components/p5/index";
import { colors } from "@/theme/colors";

export default function Home() {

	return (
		<main style={{ backgroundColor: colors.background }}>
			<div style={{position: "absolute", top: 0, width: "100%"}}>
				<BackgroundFlowFragtal/>
			</div>
			<MainArticlesFeed />
		</main>
	);
}
