"use client"

import { BackButton } from "@/components/back-button/back-button";
import { FlowFragtal } from "@/components/p5/index";
import { colors } from "@/theme/colors";

export default function FlowsFragtalPage() {

	return (
		<main style={{ backgroundColor: colors.background }}>
			<BackButton/>
			<FlowFragtal/>
		</main>
	)
}
