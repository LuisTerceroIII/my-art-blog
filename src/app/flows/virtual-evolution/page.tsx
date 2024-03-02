"use client"

import { BackButton } from "@/components/back-button/back-button";
import { VirtualityEvolution } from "@/components/p5/index";
import { colors } from "@/theme/colors";

export default function VirtualEvolution() {

	return (
		<main style={{ backgroundColor: colors.background }}>
			<BackButton color={colors.background}/>
			<VirtualityEvolution/>
		</main>
	)
}
