"use client"

import { BackButton } from "@/components/back-button/back-button";
import { Canal } from "@/components/p5/index";
import { colors } from "@/theme/colors";

export default function CanalPage() {

	return (
		<main style={{ backgroundColor: colors.background }}>
			<BackButton/>
			<Canal/>
		</main>
	)
}
