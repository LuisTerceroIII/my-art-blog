"use client"

import { MainArticlesFeed } from "@/components/main-articles-feed/main-articles-feed";
import { BackgroundFlowFragtal } from "@/components/p5/background-flow-fragtal";
import { colors } from "@/theme/colors";

export default function Home() {

	return (
		<main style={{ backgroundColor: colors.background }}>
			<div style={{position: "absolute", top: 0, left: 0}}>
				<BackgroundFlowFragtal/>
			</div>
			<MainArticlesFeed />
		</main>
	);
}
