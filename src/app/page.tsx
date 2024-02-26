"use client"

import { MainArticlesFeed } from "@/components/main-articles-feed/main-articles-feed";
import { colors } from "@/theme/colors";
import dynamic from "next/dynamic";

export default function Home() {

	const BackgroundFlowFragtal = dynamic(() => import('@/components/p5/background-flow-fragtal').then(mod => mod.BackgroundFlowFragtal as any)
    , {
    ssr: false
})

	return (
		<main style={{ backgroundColor: colors.background }}>
			<div style={{position: "absolute", top: 0, left: 0}}>
				<BackgroundFlowFragtal/>
			</div>
			<MainArticlesFeed />
		</main>
	);
}
