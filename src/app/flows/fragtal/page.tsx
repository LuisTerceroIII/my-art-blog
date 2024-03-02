"use client"

import { BackButton } from "@/components/back-button/back-button";
import { Fragtal } from "@/components/p5/index";
import { colors } from "@/theme/colors";

export default function FragtalPage() {

	return (
		<main style={{ backgroundColor: colors.background }}>
			<BackButton/>
			<Fragtal/>
		</main>
	)
}
