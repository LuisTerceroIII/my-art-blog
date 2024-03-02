"use client"

import { BackButton } from "@/components/back-button/back-button";
import { BackgroundFlowFragtal } from "@/components/p5/index";
import { colors } from "@/theme/colors";

export default function BackgroundFlows() {

	return (
		<main style={{ backgroundColor: colors.background }}>
			<BackButton/>
			<BackgroundFlowFragtal/>
		</main>
	)
}
