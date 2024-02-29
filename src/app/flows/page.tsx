"use client"

import { MainArticlesFeed } from "@/components/main-articles-feed/main-articles-feed";
import { FlowFragtal } from "@/components/p5/index";
import { Fragtal } from "@/components/p5/index";
import { Tornado } from "@/components/p5/index";
import { VirtualityEvolution } from "@/components/p5/index";
import { colors } from "@/theme/colors";

export default function Home() {

	return (
		<main style={{ backgroundColor: colors.background }}>
			<div style={{position: "absolute", paddingBottom: 200, width: "100%"}}>
				<VirtualityEvolution/>
			</div>
		</main>
	);
}
